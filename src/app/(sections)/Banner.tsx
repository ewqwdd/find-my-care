import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Banner() {
  return (
    <SectionWrapper className="bg-primary-50" id='banner'>
      <div className="py-20 flex flex-col gap-2 items-center">
        <div className="relative aspect-square w-2/5 max-w-80">
          <Image src="/banner-pic.svg" alt="banner" fill className="object-contain" />
        </div>
        <h2 className="font-semibold font-overpass text-3xl text-center max-md:text-2xl max-[564px]:text-xl">
          Finding Care Was Never That <span className="text-secondary-600">Easy</span>
        </h2>
        <Button className="mt-2 capitalize">
            Find my care
        </Button>
      </div>
    </SectionWrapper>
  );
}
