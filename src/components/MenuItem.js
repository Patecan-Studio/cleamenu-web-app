import React, { useState, useEffect } from 'react';

import Image from 'next/image'

// Importing images from the local directory

// Add as many images as you have

const images = ['/images/image-1.jpg', '/images/image-2.jpg','/images/image-3.jpg','/images/image-4.jpg','/images/image-5.jpg','/images/image-6.jpg','/images/image-7.jpg','/images/image-8.jpg','/images/image-9.jpg', '/images/image-10.jpg']; // List of imported images

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
};

const MenuItem = ({ item }) => {
    const { name, price } = item;
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // Set a random image URL from the local images
        const image = getRandomImage();
        setImageUrl(image);
    }, []);

    return (
        <article className='menu-item'>
            {imageUrl ? <Image src={imageUrl} alt={name} className='photo' width={100} height={100} /> : <p>Loading image...</p>}
            <div className="item-info">
                <header>
                    <h4>{name}</h4>
                    <h4>{price} VND</h4>
                </header>
                <p className='item-desc'>Món {name} tỏa hương thơm ngào ngạt, ngon tuyệt vời, hấp dẫn mọi giác quan.</p>
            </div>
        </article>
    );
}

export default MenuItem;
