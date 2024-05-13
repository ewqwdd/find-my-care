import Features from "./(sections)/Features";
import Hero from "./(sections)/Hero";
import Testimonials from "./(sections)/Testimonials";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <Testimonials />
    </main>
  );
}
