// components/Card.js
import React from 'react';
import QRCodeComponent from './QRCodeComponent';
import styles from './Card.module.css';

const Card = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (

        <div
            className={`${styles.card} ${isActive ? styles.active : ''}`}
            onClick={handleClick}
        >
            <div className={styles.qrWrapper}>

            </div>
            <h2 className={styles.heading}>Đánh giá nhanh</h2>
            <p className={styles.text}>Trên Google Business Review</p>
        </div>
    );
};

export default Card;
