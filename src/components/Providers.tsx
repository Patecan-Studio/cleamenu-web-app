'use client'

import React, {ReactNode} from 'react';
import {Props} from "next/script";
import {NextUIProvider} from "@nextui-org/react";

export default function Providers({children} : {children: ReactNode}) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}
