'use client'

import { useMaxMediaQuery } from "@/lib/hooks/useMediaQuery"
import NavMobileAsync from "./NavMobile.async"
import NavMobile from "./NavMobile"
import NavDesktop from "./NavDesktop"

export default function Nav() {
    const isTablet = useMaxMediaQuery(1024)
  
    if (isTablet) {
        return <NavMobileAsync />
    }
    return <NavDesktop />
}
