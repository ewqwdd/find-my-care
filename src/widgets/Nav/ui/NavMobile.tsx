import Link from "next/link";
import NavMobileModal from "./NavModal";

export default function NavMobile() {
  return (
    <nav className="w-full top-0 nav-height fixed bg-black-b10 border-b border-black-b60 z-40 flex items-center justify-center">
        <NavMobileModal />
        <Link className="uppercase text-2xl leading-5 font-semibold" href='/'>
            Find my care
        </Link>
    </nav>
  )
}
