import { lazy } from "react";

const NavMobileAsync = lazy(async() => import('./NavMobile'))

export default NavMobileAsync