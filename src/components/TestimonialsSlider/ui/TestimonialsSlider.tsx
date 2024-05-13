"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React, { Fragment, useCallback, useState } from "react";
import Star from "@/lib/icons/Star.svg";
import Quotes from "@/lib/icons/Quotes.svg";
import Arrow from "@/lib/icons/slider-arrow.svg";
import { testimonialsList } from "../config/config";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const arr = new Array(5).fill(0).map((_, index) => index + 1);

export default function TestimonialsSlider() {
  const [api, setApi] = useState<CarouselApi>();

  const starActive = <Star className="size-5 text-accent-400" />;
  const starInnactive = <Star className="size-5 text-black-b60" />;

  const next = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const prev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {testimonialsList.map((elem, index) => (
          <CarouselItem>
            <div className="flex flex-col gap-6 p-8 pt-4 bg-white w-full max-w-[410px] mx-auto">
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  {arr.map((star) => (
                    <Fragment key={star}>{star <= elem.rate ? starActive : starInnactive}</Fragment>
                  ))}
                </div>
                <p className="text-black-b200">{elem.content}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative bg-black-b60 size-16 rounded-full overflow-clip">
                  <Image src={elem.icon} alt="user" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-lg text-black-b500">{elem.name}</p>
                  <p className="text-black-b90">{elem.role}</p>
                </div>
                <Quotes className="ml-auto self-start size-10 text-primary-100" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Button
        onClick={prev}
        className="bg-primary-400 hover:!bg-primary-300 absolute top-1/2 left-12 -translate-y-1/2"
        size={"icon"}
      >
        <Arrow className="size-8" />
      </Button>
      <Button
        onClick={next}
        className="bg-primary-400 hover:!bg-primary-300 absolute top-1/2 right-12 -translate-y-1/2"
        size={"icon"}
      >
        <Arrow className="size-8 rotate-180" />
      </Button>
    </Carousel>
  );
}
