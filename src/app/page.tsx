import { supabase } from "@/lib/supabase";
import Features from "./(sections)/Features";
import Hero from "./(sections)/Hero";
import SignIn from "./(sections)/SignIn";
import Testimonials from "./(sections)/Testimonials";
import { getAuthSession } from "@/lib/nextAuth/authOptions";

export default function Home() {
  const session = getAuthSession().then((s) => console.log(s));
  return (
    <main className="relative">
      <SignIn />
      <Hero />
      <Features />
      {/* <Testimonials /> */}
    </main>
  );
}
