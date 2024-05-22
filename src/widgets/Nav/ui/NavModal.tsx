"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";
import { linksList } from "../config/config";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Menu from "@/lib/icons/menu.svg";
import X from "@/lib/icons/x.svg";

const buttonStyles = "absolute top-0 left-0 p-0 w-full h-full hover:text-inherit hover:bg-white/60";

export default function NavMobileModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [iconMenu, setIconMenu] = useState<boolean>(false);
  const [isClosing, setIsCLosing] = useState<boolean>(false);
  const closeTimeout = useRef() as MutableRefObject<NodeJS.Timeout>;
  const location = usePathname();

  const closeNav = useCallback(() => {
    setIconMenu(false);
    setIsCLosing(true);
    document.body.style.overflowY = 'visible'
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
      setIsCLosing(false);
    }, 400);
  }, []);

  const toggleNav = useCallback(() => {
    if (closeTimeout.current) {
      setIsCLosing(false);
      clearTimeout(closeTimeout.current);
    }
    if (isOpen) {
      closeNav();
    } else {
      document.body.style.overflowY = 'hidden'
      setIconMenu(true);
      setIsOpen((prev) => !prev);
    }
  }, [isOpen, closeNav]);

  useEffect(() => {
    closeNav();
  }, [location, closeNav]);

  return (
    <>
      <div className="absolute left-0 w-12 h-12">
        <Button
          className={cn(buttonStyles, iconMenu ? styles.closeMenu : styles.openMenu, "bg-transparent")}
          onClick={toggleNav}
        >
          <Menu className="w-14 h-14" />
        </Button>
        <Button
          className={cn(buttonStyles, !iconMenu ? styles.closeX : styles.openX, "bg-transparent")}
          onClick={toggleNav}
        >
          <X className="w-full h-full" />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            "fixed bg-slate-100 w-full h-full right-0 flex flex-col",
            styles.mobile,
            isClosing ? styles.close : ""
          )}
        >
          {linksList.map((elem, index) => (
            <>
              <Link
                key={index}
                href={elem.href}
                className="px-2 py-4 hover:bg-slate-400 text-lg transition-all text-slate-700 font-medium"
              >
                {elem.label}
              </Link>
              <Separator className="bg-slate-800" />
            </>
          ))}
          <Button className="mt-4 text-xl font-semibold">Apply Now</Button>
        </div>
      ) : null}
    </>
  );
}
