import FeatureCard, { IFeatureCard } from "@/components/FeatureCard/FeatureCard";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import Image from "next/image";

const features: IFeatureCard[] = [
  {
    heading: "Personalized Care Just for You",
    paragraph: `We're dedicated to finding care options that fit your life perfectly. We listen, we learn about your needs, and we provide care that's as unique as you are.`,
    icon: "/icons/Users.png",
  },
  {
    heading: "Simple as 1-2-3",
    paragraph: `Just sign up, share a bit about yourself, and we’ll handle the rest, ensuring a smooth path to personalized support.`,
    icon: "/icons/Emotion.png",
  },
  {
    heading: "Affordability for All",
    paragraph: `Find My Care is committed to providing quality care within your budget. We strive to ensure you receive the best care without overstepping your financial comfort zone.`,
    icon: "/icons/Coin.png",
  },
];

export default function Features() {
  return (
    <SectionWrapper id="features" className="py-20">
      <h2 className="text-4xl text-black-b800 text-center font-semibold">Why choose us?</h2>
      <div className="grid grid-cols-2 mt-2">
        <div className="relative">
          <Image src="/why-choose-us.svg" alt="why choose us illustration" fill className="object-contain" />
        </div>
        <div className="flex flex-col pt-8">
          {features.map((elem, index) => (
            <FeatureCard key={index} {...elem} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
