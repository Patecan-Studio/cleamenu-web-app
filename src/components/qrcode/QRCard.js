// components/Card.js
import React, {useState} from 'react';
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
                <QRCodeComponent value="https://www.example.com"/>
            </div>
            <h2 className={styles.heading}>Xin cảm ơn quý khách</h2>
            <p className={styles.text}>Quét mã QR để thanh toán chuyển khoản</p>
        </div>
    );
};

export default Card;
