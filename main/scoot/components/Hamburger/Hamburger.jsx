// Hamburger.js
import React from 'react';
import styles from './Hamburger.module.css';

const Hamburger = ({ isOpen, onClick }) => {
    return (
        <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={onClick}
            aria-label="Toggle navigation menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default Hamburger;
