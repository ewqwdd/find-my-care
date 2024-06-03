"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LoginBtn() {
  const session = useSession();

  if (session.data?.user) {
    return (
      <Button size={"m"} className="md:self-start" onClick={() => signOut()}>
        Sign out
      </Button>
    );
  }

  return (
    <Button asChild size={"m"} className="md:self-start">
      <Link href="/">Login</Link>
    </Button>
  );
}
