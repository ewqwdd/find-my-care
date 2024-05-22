import { AuthDatabase } from "@/types/supabase-auth";
import { PublicDatabase } from "@/types/supabase-public";
import { supabaseAuth, supabasePublic } from "../supabase";

export type NextAuthUser = AuthDatabase["next_auth"]["Tables"]["users"]["Row"];
export type PublicProfile = PublicDatabase["public"]["Tables"]["profile"]["Row"];
export type User = NextAuthUser & PublicProfile;

export const getUserById = async (id: string): Promise<User> =>
  ({
    ...(await supabaseAuth.from("users").select().eq("id", id).single()).data,
    ...(await supabasePublic.from("profile").select().eq("user_id", id).single()).data,
  } as User);

export const updateProfile = (user_id: string, data: PublicDatabase["public"]["Tables"]["profile"]["Update"]) =>
  supabasePublic.from("profile").update(data).eq("user_id", user_id);

export const updateUser = (user_id: string, data: AuthDatabase["next_auth"]["Tables"]["users"]["Update"]) =>
  supabaseAuth.from("users").update(data).eq("id", user_id);
