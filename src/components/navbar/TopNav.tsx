import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {FaBowlFood} from "react-icons/fa6";
import {GiMatchTip} from "react-icons/gi";
import Link from "next/link";
import NavLink from "@/components/navbar/NavLink";


export default function TopNav() {
    return (
        <Navbar
            maxWidth={'xl'}
            className={'bg-gradient-to-r from-yellow-400 to-red-700'}
            classNames={{
                item: [
                    'text-xl',
                    'text-white'
                ]
            }}
        >
            <NavbarBrand>
                <FaBowlFood size={40}/>
                <div className={'font-bold text-3xl flex'}>
                    <span>Clea</span>
                    <span>menu</span>
                </div>
            </NavbarBrand>
            <NavbarContent justify={'center'}>
                <NavLink href={'/members'} label="Matches"/>
                <NavLink href={'/lists'} label="Lists"/>
                <NavLink href={'/messages'} label="Messages"/>
            </NavbarContent>
            <NavbarContent justify={'end'}>
                <Button as={Link} href={'/(auth)/login'} variant={'bordered'} className={'text-white'}>Login</Button>
                <Button as={Link} href={'/(auth)/register'} variant={'bordered'} className={'text-white'}>Register</Button>
            </NavbarContent>
        </Navbar>
    )
}
