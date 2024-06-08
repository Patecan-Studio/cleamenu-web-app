// app/api/menu/route.ts

import {NextResponse} from 'next/server';
import axios from "axios";

export async function GET() {

    const headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
    };

    const storeId = '66499d09b313248178294db5';
    const url = `${process.env.CLEAMENU_URL}/stores/${storeId}`;

    const result = await axios.get(url, {headers})
        .then(response => {
            console.log('Store data:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching store data:', error);
        });

    const menu = result;
    return NextResponse.json(menu);
}
