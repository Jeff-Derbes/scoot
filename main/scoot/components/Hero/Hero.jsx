import React from 'react';
import Image from "next/image";
import styles from './Hero.module.css'
import Button from "@/components/Button/Button";
import line from '../../public/assets/patterns/line.svg'
import rightArrow from '../../public/assets/patterns/right-arrow.svg'
import circles from '../../public/assets/patterns/white-circles.svg'


export default function Hero() {
    return (
        <div className={styles['hero-container']}>
            <div className={styles['content-container']}>
                <Image src={line} className={styles.line} alt='line' width={203} height={20}/>
                <Image src={rightArrow} className={styles.arrow} alt='line' width={447} height={138}/>
                <Image src={circles} className={styles.circles} alt='line' width={234} height={63}/>
                <h2 className={styles['hero-content']}>Scooter sharing made simple</h2>
                <div className={styles['subheading-container']}>
                    <p className={styles['hero-subheading']}>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in
                        each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re
                        away!</p>
                    <div className={styles['hero-btn']}><Button text={'Get Scootin'}/></div>
                </div>
            </div>
        </div>
    );
};


