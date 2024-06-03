import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import clientPromise from "@/lib/db/db";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new NextResponse(JSON.stringify({ status: false, msg: "Credentials are incomplete" }), { status: 422 });
    }

    const client = await clientPromise;
    const db = client.db();
    const userExists = await db.collection("users").findOne({ email });

    if (userExists) {
      return new NextResponse(JSON.stringify({ status: false, msg: "User with that email already exists" }), { status: 400 });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    await db.collection("users").insertOne({
      email,
      password: hashedPassword,
      emailVerified: false,
    });

    return new NextResponse(JSON.stringify({ status: true, msg: "success" }));
  } catch (err) {
    console.error(err);
    return new NextResponse(JSON.stringify({ status: false, msg: "error" }), { status: 500 });
  }
}
