import NextAuth, { getServerSession } from "next-auth/next";
import { SupabaseAdapter } from "@next-auth/supabase-adapter";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { supabaseAuth, supabasePublic } from "../supabase";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(creds) {
        if (!creds?.password || !creds?.email) {
          return null;
        }
        const { password, email } = creds;

        const user = (await supabaseAuth.from("users").select().eq("email", email).single()).data;

        const compare = bcrypt.compareSync(password, user?.password || "");
        if (!compare) {
          return null;
        }
        return user;
      },
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  callbacks: {
    async signIn(params) {
      try {
        const profile = await supabasePublic.from("profile").select("").eq("id", params.user.id);
        if (!profile.data?.[0]) {
          await supabasePublic.from("profile").insert({
            user_id: params.user.id,
            isAccepted: false,
          });
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    async session({ session }) {
      const user = await supabaseAuth.from("users").select("id").eq("email", session.user?.email!).single();
      session.user!.id = user.data?.id;
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
