import { ReactNode } from "react";
import Instagram from '@/lib/icons/instagram.svg'
import Linkedin from '@/lib/icons/linkedin.svg'
import Facebook from '@/lib/icons/facebook.svg'

interface Social {
    href: string,
    icon: ReactNode
}

export const socials: Social[] = [
    {
        href: '#',
        icon: <Instagram className='size-7 text-primary-100 hover:text-primary-200' />
    },
    {
        href: '#',
        icon: <Linkedin className='size-7 text-primary-100 hover:text-primary-200' />
    },{
        href: '#',
        icon: <Facebook className='size-7 text-primary-100 hover:text-primary-200' />
    },
]