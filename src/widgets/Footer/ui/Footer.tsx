import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import Link from "next/link";
import { socials } from "../config/config";
import Email from "@/lib/icons/email.svg";
import Phone from "@/lib/icons/phone.svg";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <SectionWrapper as="footer" className="bg-primary-900 py-20">
      <div className="flex justify-between max-md:flex-col">
        <div className="flex flex-col max-md:items-center">
          <Link href="/" className="uppercase text-white text-3xl font-semibold font-overpass">
            Find my care
          </Link>
          <span className="text-primary-200">Finding care simplified</span>
          <div className="flex gap-2 mt-6 max-md:flex-col items-center">
            <iframe
              className="rounded w-48 h-20 max-md:w-64 max-md:h-32"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1239.8461382232283!2d-1.8091098098451637!3d51.57387454584949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871460acda1cb51%3A0xb13d35565e506fdc!2sFirst%20City%20Care%20Group!5e0!3m2!1sru!2suk!4v1715629346013!5m2!1sru!2suk"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-primary-100 font-medium">
              First City House, <br /> Cheney Manor Industrial Estate, <br /> Swindon SN2 2QG
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 max-md:items-center max-md:mt-8">
          <div className="flex gap-2">
            {socials.map((elem, index) => (
              <Link href={elem.href} key={index}>
                {elem.icon}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Link href={`mailto:${process.env.EMAIL}`} className="text-primary-100 hover:text-primary-200 flex gap-2">
              <Email className="size-6" />
              email@email.com
            </Link>
            <Link href={`tel:${process.env.PHONE}`} className="text-primary-100 hover:text-primary-200 flex gap-2">
              <Phone className="size-6" />
              +123 3112 1231
            </Link>
          </div>
          <Button asChild size={"m"} className="md:self-start">
            <Link href="/">Login</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
