import Image from "next/image";
import {Button} from "@nextui-org/button";
import {FaRegSmile} from 'react-icons/fa';
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div>Hello World</div>
            <Button
                as={Link}
                href={'/members'}
                color='primary'
                variant={'bordered'}
                startContent={<FaRegSmile/>}>Hello</Button>
        </main>
    );
}
