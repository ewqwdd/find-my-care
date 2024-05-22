import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import TestimonialsSlider from "@/components/TestimonialsSlider/ui/TestimonialsSlider";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  return (
    <SectionWrapper className="bg-primary-500 py-20" id="testimonials">
      <div className="flex flex-col lg:grid lg:grid-cols-2 max-lg:gap-8">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <span className="text-primary-200 text-center">What they say?</span>
          <h2 className="text-white text-3xl mt-2 font-semibold text-center">Let our customers talk for us</h2>
          <p className="text-primary-100 mt-4 max-w-[410px] max-lg:text-center">
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
