// components/QRCodeComponent.js
import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = ({ value }) => {
    return (
        <div className="qr-code-container">
            <QRCode value={value} size={100} renderAs="canvas"/> {/* Adjusted size */}
        </div>
    );
};

export default QRCodeComponent;
