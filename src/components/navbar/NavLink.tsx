import {NavbarItem} from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

type Props = {
    href: string;
    label: string;
}

export default function NavLink({href, label}: Props){
    return (
        <NavbarItem isActive as={Link} href={href}>{label}</NavbarItem>
    )
}