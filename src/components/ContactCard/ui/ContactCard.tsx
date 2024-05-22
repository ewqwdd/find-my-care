import CardWrapper from "../../CardWrapper/CardWrapper"
import Arrow from '@/lib/icons/arrow.svg'
import Link from "next/link"
import { IContactCard } from "../config/config"
import { cn } from "@/lib/utils"

interface ContactCardProps extends IContactCard{
    className?: string
}

export default function ContactCard({className, href, icon, linkText, subtitle, title}: ContactCardProps) {
  return (
    <CardWrapper className={cn("p-4 flex gap-4 xl:h-44 h-36", className)}>
        <div className="xl:size-[5.5rem] size-16 flex items-center justify-center bg-primary-50 rounded-full xl:[&>svg]:size-12 [&>svg]:size-10 [&>svg]:text-primary-800">
          {icon}
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="xl:text-xl text-lg font-medium text-black-b600">
            {title}
          </h2>
          <p className="text-black-b200">
            {subtitle}
          </p>
          {href && <Link href={href} className="text-primary-500 flex gap-2 font-medium mt-auto xl:text-lg items-center">
            <span>{linkText}</span>
            <Arrow className='xl:size-6 size-4' />
          </Link>}
        </div>
    </CardWrapper>
  )
}
