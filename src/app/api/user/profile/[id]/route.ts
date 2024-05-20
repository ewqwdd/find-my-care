import { updateProfile } from "@/lib/entities/User";
import { NextRequest, NextResponse } from "next/server";

export async function Put(req: NextRequest, { params: { id } }: { params: { id: string } }) {
  try {
    const body = await req.json();
    await updateProfile(id, body);
    return new NextResponse("ok", { status: 200 });
  } catch (err) {
    return new NextResponse("Internal server error", { status: 500 });
  }
}
