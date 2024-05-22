import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export default function CardWrapper({children, className, ...props}: CardWrapperProps) {
  return (
    <div className={cn('border border-black-b40 rounded-xl', className)} {...props}>
        {children}
    </div>
  )

}
