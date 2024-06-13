import React from 'react';
import Image from 'next/image';

const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-btn" onClick={onClose}>x</button>
                {children}
                <Image src="/gif/siri.gif" alt="Siri" className="modal-img" width={200} height={200} />
            </div>
        </div>
    );
};

export default Modal;
