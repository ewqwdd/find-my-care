import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from "./Questions.module.css";
import { cn } from "@/lib/utils";
import MediaMinWrapper from "@/components/MediaMinWrapper/MediaMinWrapper";
import MediaMaxWrapper from "@/components/MediaMaxWrapper/MediaMaxWrapper";

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="max-lg:mt-12 md:px-4 px-0 relative overflow-x-clip -z-10">
      <MediaMinWrapper query={768}>
        <div className="h-[83vw] w-screen absolute -left-[27vw] -top-[33vw]">
          <Image src="/hero-bg1.svg" alt="background image" className="object-contain" fill />
        </div>
      </MediaMinWrapper>
      <MediaMinWrapper query={768}>
        <div className="h-[60vw] w-[80vw] absolute -right-[39vw] -top-[102px] -z-10">
          <Image src="/hero-bg2.svg" alt="background image" className="object-contain" fill />
        </div>
      </MediaMinWrapper>
      <MediaMaxWrapper query={768}>
        <div className="h-[120vw] w-[118vw] absolute -z-10 -bottom-[10vw] -left-[15vw]">
          <Image src="/hero-mobile-bg.svg" alt="background image" className="object-contain" fill />
        </div>
      </MediaMaxWrapper>
      <div className="md:grid w-full grid-cols-2 pt-16 pb-10 relative gap-8 flex flex-col max-md:gap-12">
        <div className="flex flex-col justify-center max-md:order-2 max-md:px-4">
          <h1 className="uppercase text-hero font-bold text-black-b700 leading-[120%]">
            Finding care simplified
          </h1>
          <p className="text-black-b100 max-w-xl lg:text-lg mt-4">
            At First City, we want to make finding the right care, an effortless and efficient task that
            ensures effectiveness for all age groups.
          </p>
          <div className="flex gap-8 md:mt-12 mt-8">
            <Button>Find My Care</Button>
            <Button variant={"ghost"}>Learn More</Button>
          </div>
        </div>
        <div className={cn("relative overflow-clip md:rounded max-md:order-1", styles.pic)}>
          <Image src="/hero-image.png" alt="hero image" fill className="object-cover" />
        </div>
      </div>
    </SectionWrapper>
  );
}
