// app/api/menu/route.ts

// pages/api/store.js

import { NextResponse } from 'next/server';

export async function GET() {
    const headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
    };

    const storeId = '66499d09b313248178294db5';
    const url = `${process.env.CLEAMENU_URL}/stores/${storeId}`;

    try {
        const res = await fetch(url, {
            next: { revalidate: 0 },
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Failed to fetch store data');
        }

        const data = await res.json();
        console.log('Store data:', data);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching store data:', error);
        return NextResponse.json({ error: 'Failed to fetch store data' }, { status: 500 });
    }
}
