import { AuthDatabase } from "@/types/supabase-auth";
import { PublicDatabase } from "@/types/supabase-public";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabasePublic = createClient<PublicDatabase>(supabaseUrl, supabaseKey);
export const supabaseAuth = createClient<AuthDatabase>(supabaseUrl, supabaseKey, {
  db: {
    schema: "next_auth",
  },
});

export const supabase = createClient(supabaseUrl, supabaseKey);
