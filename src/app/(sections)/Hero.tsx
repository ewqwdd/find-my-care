import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <SectionWrapper id="hero">
      <div className="grid w-full grid-cols-2 pt-16 pb-10 relative gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="uppercase text-[75px] font-bold text-black-b800 leading-[120%]">
            Finding care simplified
          </h1>
          <p className="text-black-b100 max-w-xl text-lg mt-4">
            At First City, we want to make finding the right care, an effortless and efficient task that
            ensures effectiveness for all age groups.
          </p>
          <div className="flex gap-8 mt-12">
            <Button>Find My Care</Button>
            <Button variant={"ghost"}>Learn More</Button>
          </div>
        </div>
        <div
          className="relative overflow-clip rounded"
          style={{
            aspectRatio: "156/145",
            boxShadow: "0 1px 6px 1px rgba(0, 0, 0, 0.35)",
          }}
        >
          <Image src="/hero-image.png" alt="hero image" fill className="object-cover" />
        </div>
      </div>
    </SectionWrapper>
  );
}
