import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import TestimonialsSlider from "@/components/TestimonialsSlider/ui/TestimonialsSlider";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <SectionWrapper className="bg-primary-500 py-20" id="testimonials">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-start">
          <span className="text-primary-200">What they say?</span>
          <h2 className="text-white text-3xl mt-2 font-semibold">Let our customers talk for us</h2>
          <p className="text-primary-100 mt-4 max-w-[410px]">
            Real stories from real people, each sharing how we met their unique needs with care that’s both
            affordable and personal. Their satisfaction is our greatest endorsement.
          </p>
          <Button variant={"outline"} size={"m"} className="capitalize mt-6">
            Find my care
          </Button>
        </div>
        <TestimonialsSlider />
      </div>
    </SectionWrapper>
  );
}
