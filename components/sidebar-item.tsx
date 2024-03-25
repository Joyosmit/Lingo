'use client'

import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

type Props = {
    href: string,
    iconSrc: string,
    label: string,
}
export const SidebarItem = ({ href, iconSrc, label }: Props) => {
    const pathname = usePathname();
    const active = pathname===href;
    return (
        <Button variant={ active ?"sidebarOutline":"sidebar"}
        className="justify-start h-[50px]" asChild>
            <Link href={href}>
                <Image src={iconSrc} alt={label} width={32} height={32} className="mr-5"/>
                {label}
            </Link>
        </Button>
    )
}