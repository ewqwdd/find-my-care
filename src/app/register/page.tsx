import AuthForm from "@/components/AuthForm/AuthForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getAuthSession } from "@/lib/nextAuth/authOptions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Register({ searchParams: { error } }: { searchParams: { error: string } }) {
  const session = await getAuthSession();
  if (session?.user) {
    redirect("/u/dashboard");
  }
  return (
    <main className="relative screen-no-nav w-full flex items-center flex-col justify-center px-3 overflow-clip">
      <div className="p-6 pt-4 bg-white border-black-b30 rounded-[6px] max-w-[432px] w-full border z-10">
        <AuthForm />
      </div>
      {error ? (
        <Alert className="max-w-[432px] mt-6 z-10" variant={"destructive"}>
          <AlertTitle>Something went wrong!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : null}
      <div className="absolute -bottom-[12vw] left-[2vw] w-[36vw] h-[44vw]">
        <Image src="/register-blob-l.svg" alt="background-image" fill className="object-contain" />
      </div>
      <div className="absolute top-0 right-[1vw] w-[38vw] h-[45.6vw]">
        <Image src="/register-blob-r.svg" alt="background-image" fill className="object-contain" />
      </div>
    </main>
  );
}
