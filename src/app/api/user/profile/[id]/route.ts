import clientPromise from "@/lib/db/db";
import { updateProfile } from "@/lib/entities/User";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function Put(req: NextRequest, { params: { id } }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db();
    if (!id) {
      return new NextResponse(JSON.stringify({ status: false, msg: "No Id provided" }), { status: 400 });
    }
    db.collection("users").updateOne({ _id: new ObjectId(id) }, { $set: body });
    return new NextResponse(JSON.stringify({ status: true, msg: "success" }));
  } catch (err) {
    return new NextResponse(JSON.stringify({ status: false, msg: "Error" }), { status: 500 });
  }
}
