import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";

export interface IFeatureCard {
  icon: string | ReactNode;
  heading: string;
  paragraph: string;
  alt?: string;
}

interface FeatureCardProps extends IFeatureCard, HTMLAttributes<HTMLDivElement> {}

export default function FeatureCard({
  heading,
  icon,
  paragraph,
  alt,
  className,
  ...props
}: FeatureCardProps) {
  let iconNode;
  if (typeof icon === "string") {
    iconNode = <Image src={icon} alt={alt ?? "illustration"} width={40} height={40} />;
  } else {
    iconNode = icon;
  }
  return (
    <div className={cn("p-4 flex gap-4  items-center", className)} {...props}>
      <div className="relative size-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-400 overflow-clip">
        {iconNode}
      </div>
      <div className="flex flex-col gap-2 max-w-[420px]">
        <h3 className="font-overpass font-semibold text-xl leading-body">{heading}</h3>
        <p className="text-black-b100 text-base">{paragraph}</p>
      </div>
    </div>
  );
}
