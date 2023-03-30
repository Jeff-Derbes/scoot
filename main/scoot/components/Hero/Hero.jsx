import React from 'react';
import styles from './Hero.module.css'
import Button from "@/components/Button/Button";

export default function Hero() {
    return (
        <div className={styles['hero-container']}>
            <div className={styles['content-container']}>
                <h2 className={styles['hero-content']}>Scooter sharing made simple</h2>
                <div>
                    <p className={styles['hero-subheading']}>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in
                        each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re
                        away!</p>
                    <div className={styles['hero-btn']}><Button text={'Get Scootin'}/></div>
                </div>
            </div>
        </div>
    );
};


