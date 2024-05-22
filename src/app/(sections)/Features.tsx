import FeatureCard, { IFeatureCard } from "@/components/FeatureCard/FeatureCard";
import MediaMinWrapper from "@/components/MediaMinWrapper/MediaMinWrapper";
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
    <SectionWrapper id="features" className="py-20 px-3 relative overflow-x-clip">
      <MediaMinWrapper query={768}>
        <div className="absolute left-1/2 -translate-x-1/2 w-[185vw] h-[99vw] bottom-0 -z-10">
          <Image src='/features-bg.svg' alt="background picture" fill className="object-contain" />
        </div>
      </MediaMinWrapper>
      <h2 className="text-4xl text-black-b800 text-center font-semibold">Why choose us?</h2>
      <div className="flex flex-col items-center md:grid md:grid-cols-3 lg:grid-cols-2 mt-2">
        <div className="relative aspect-square max-md:max-w-md max-lg:w-full">
          <Image src="/why-choose-us.svg" alt="why choose us illustration" fill className="object-contain" />
        </div>
        <div className="flex flex-col pt-2 md:pt-8 md:max-lg:col-span-2 max-md:items-center">
          {features.map((elem, index) => (
            <FeatureCard key={index} {...elem} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
