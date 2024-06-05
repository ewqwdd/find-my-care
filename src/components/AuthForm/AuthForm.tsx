"use client";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Login from "./Login";
import Register from "./Register";
import { Button } from "@/components/ui/button";
import Google from "@/lib/icons/Google.svg";
import { signIn } from "next-auth/react";

export default function AuthForm() {
  const searchParams = useSearchParams();
  const form = searchParams.get("form");

  return (
    <>
      <Tabs
        defaultValue={["register", "login"].includes(form ?? "") ? form! : "register"}
        className="flex flex-col items-center gap-2"
      >
        <TabsList>
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="register" className="w-full">
          <Register />
        </TabsContent>
        <TabsContent value="login" className="w-full">
          <Login />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col w-full items-center gap-2 mt-4">
        <span className="">Or continue with:</span>
        <div className="flex">
          <Button
            className="bg-black-b700 rounded-full hover:bg-black-b500 p-[6px]"
            onClick={() => signIn("google", { redirect: true, callbackUrl: "/u/dashboard" })}
          >
            <Google className="size-[30px]" />
          </Button>
        </div>
      </div>
    </>
  );
}
