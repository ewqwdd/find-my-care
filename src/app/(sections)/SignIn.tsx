"use client";

import { signIn } from "next-auth/react";
import { useCallback } from "react";

export default function SignIn() {
  const onClick = useCallback(() => {
    signIn("google");
  }, []);
  return <button onClick={onClick}>Login</button>;
}
