import Features from "./(sections)/Features";
import Hero from "./(sections)/Hero";
import SignIn from "./(sections)/SignIn";
import Testimonials from "./(sections)/Testimonials";
import { getAuthSession } from "@/lib/nextAuth/authOptions";
import Questions from "./(sections)/Questions";
import Banner from "./(sections)/Banner";

export default function Home() {
  const session = getAuthSession().then((s) => console.log(s));
  return (
    <main className="relative">
      <SignIn />
      <Hero />
      <Features />
      <Testimonials />
      <Questions />
      <Banner />
    </main>
  );
}
