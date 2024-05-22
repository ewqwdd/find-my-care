import { cn } from "@/lib/utils";
import { ElementType, HTMLAttributes, ReactNode } from "react";

interface SectionWrapperProps<T extends ElementType> extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  as?: T
}

export default function SectionWrapper<T extends ElementType = 'section'>({ className, children, as: _as, ...props }: SectionWrapperProps<T>) {
  const Cmp = _as ?? 'section'
  
  return (
    <Cmp className={cn("px-3", className)} {...props}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </Cmp>
  );
}
