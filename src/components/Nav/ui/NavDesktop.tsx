import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { linksList } from "../config/config";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavDesktopProps extends HTMLAttributes<HTMLDivElement> {}

export default function NavDesktop({ className, ...props }: NavDesktopProps) {
  return (
    <nav
      className={cn("mx-auto max-w-screen-xl w-full px-3 items-center nav-height flex", className)}
      {...props}
    >
      <Link href={"/"} className="flex gap-4 items-center">
        <div className="size-12 bg-primary-50"></div>
        <span className="text-4xl font-bold font-overpass text-primary-900 leading-8">Find My Care</span>
      </Link>
      <div className="grow flex items-center justify-center gap-16">
        {linksList.map((elem, index) => (
          <Link
            key={index}
            href={elem.href}
            className="text-slate-700 font-medium text-lg hover:text-slate-500"
          >
            {elem.label}
          </Link>
        ))}
      </div>
      <Button asChild>
        <Link href={"/account/dashboard"}>Find My Care</Link>
      </Button>
    </nav>
  );
}
