import { getAuthSession } from "@/lib/nextAuth/authOptions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const cookies_ = cookies();
  const session = await getAuthSession();
  if (!session?.user) {
    cookies_.getAll().forEach((elem) => {
      cookies_.delete(elem.name);
    });
    redirect("/register");
  }
  return (
    <main className="min-screen-no-nav px-3">
      <h1 className="text-2xl font-semibold text-black-b700">Welcome Back!</h1>
      <p className="text-black-b400">{session.user.name}</p>
    </main>
  );
}
