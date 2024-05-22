import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { supabaseAuth } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new NextResponse("Credentials are incomplete", { status: 422 });
    }

    const userExists = await supabaseAuth.from("users").select().eq("email", email).single();
    if (Number(userExists.count) > 0) {
      return new NextResponse("User with that email already exists", { status: 400 });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await supabaseAuth.from("users").insert({
      email,
      password: hashedPassword,
    });
    return user;
  } catch (err) {
    return new NextResponse("Internal server error", { status: 500 });
  }
}
