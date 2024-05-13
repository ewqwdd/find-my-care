import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export default function SectionWrapper({ className, children, ...props }: SectionWrapperProps) {
  return (
    <section className={cn("px-3", className)} {...props}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
