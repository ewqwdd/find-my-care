import Features from "./(sections)/Features";
import Hero from "./(sections)/Hero";
import Testimonials from "./(sections)/Testimonials";
import { getAuthSession } from "@/lib/nextAuth/authOptions";
import Questions from "./(sections)/Questions";
import Banner from "./(sections)/Banner";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <Testimonials />
      <Questions />
      <Banner />
    </main>
  );
}
