import { ContactCard, IContactCard } from "@/components/ContactCard";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";
import { Button } from "@/components/ui/button";
import Email from "@/lib/icons/email.svg";
import Form from "@/lib/icons/form.svg";
import Phone from "@/lib/icons/phone.svg";

const contactCards: IContactCard[] = [
  {
    href: `mailto:${process.env.EMAIL}`,
    icon: <Email />,
    title: "Email us",
    subtitle: process.env.EMAIL,
    linkText: "Send us an Email",
  },
  {
    href: "/contact-us",
    icon: <Form />,
    subtitle: "We will call you back in 2 days!",
    title: "Fill the contact form",
    linkText: "Go to the form",
  },
  {
    href: `tel:${process.env.PHONE}`,
    icon: <Phone />,
    subtitle: "+12 345 6789",
    title: "Call us",
    linkText: "Make us a Call",
  },
];

export default function Questions() {
  return (
    <SectionWrapper id='questions'>
      <div className="flex flex-col gap-8 items-center py-16">
        <h2 className="text-4xl text-black-b800 font-semibold font-overpass">Have a question?</h2>
        <div className="lg:flex justify-center gap-8 grid grid-cols-1">
          {contactCards.map((elem, index) => (
            <ContactCard {...elem} key={index} />
          ))}
        </div>
        <Button className="mt-2 text-black-b10 capitalize">Learn more</Button>
      </div>
    </SectionWrapper>
  );
}
