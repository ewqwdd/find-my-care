import Banner from "./(sections)/Banner";
import Features from "./(sections)/Features";
import Hero from "./(sections)/Hero";
import Questions from "./(sections)/Questions";
import Testimonials from "./(sections)/Testimonials";

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
