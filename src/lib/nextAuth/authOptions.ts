import NextAuth, { getServerSession } from "next-auth/next";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import clientPromise from "../db/db"; // Adjust the path as necessary
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/register?form=login",
    error: "/register?form=login",
  },
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
          throw new Error("Credentials are incomplete");
        }
        const { password, email } = creds;

        const client = await clientPromise;
        const db = client.db();
        const user = await db.collection("users").findOne({ email });

        if (!user) {
          throw new Error("User not found");
        }

        if (!user?.password) {
          throw new Error("Invalid Sign in method");
        }

        if (bcrypt.compareSync(password, user.password)) {
          return user;
        }
        throw new Error("Invalid password");
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user }) {
      const client = await clientPromise;
      const db = client.db();
      const profile = await db.collection("profile").findOne({ user_id: user.id });
      const account = await db.collection("account").findOne({ userId: user.id });
      if (account?.provider === "google") {
        await db.collection("users").updateOne({ email: user.email }, { $set: { emailVerified: true } });
      }
      if (!profile) {
        await db.collection("profile").insertOne({
          user_id: user.id,
          isAccepted: false,
        });
      }
      return true;
    },
    async session({ session }) {
      const client = await clientPromise;
      const db = client.db();
      const user = await db.collection("users").findOne({ email: session.user?.email });

      session.user!.id = user?._id;
      session.user!.emailVerified = user?.emailVerified;
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
