'use client'; // This directive is required to use client-side hooks in the App Router

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {CardBody} from "@nextui-org/card";
import {Button} from "@nextui-org/button";
import './styles.scss';
import styles from '../../../components/qrcode/Card.module.css';

import MenuBody from '@/components/MenuBody';
import QRCard from "@/components/qrcode/QRCard";
import Modal from "@/components/order_note/Modal";
import { GiNotebook } from "react-icons/gi";


const fetchMenu = async (): Promise<any[]> => {
    const res = await fetch('/api/menu', {
        headers: {
            'Cache-Control': 'no-cache'
        }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch menu');
    }
    return res.json();
};

export default function Home() {
    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleToggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const loadData = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchMenu();
            setMenuItems(data);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData().then(r => console.log("Fetched Menu Data!!!"));
    }, []);


    return (
        <div>
            <button onClick={loadData}>Refresh</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && menuItems.length === 0 && <p>No menu items available</p>}


            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <MenuBody items={menuItems}/>
            </section>
            <Button radius="full" className="absolute top-4 right-4 bg-blue-500 text-white border-none py-1.5 px-3 cursor-pointer transition-all duration-300 ease-linear rounded uppercase tracking-wider bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" onClick={handleToggleModal} color="success" endContent={<GiNotebook/>}>
                {isModalVisible ? 'Đóng note gọi món' : 'Mở note gọi món'}
            </Button>
            <Modal isVisible={isModalVisible} onClose={handleToggleModal}>
                <h4>Gọi món</h4>
                <p>Đây là ghi chú của món ăn.</p>
            </Modal>
            <div className={styles.container}>
                <QRCard/>
            </div>
        </div>


    );
}


