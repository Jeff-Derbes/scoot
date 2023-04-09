import React from 'react';
import styles from './JoinNow.module.css'
import Image from "next/image";
import appStore from 'public/assets/icons/app-store.svg'
import googlePlay from 'public/assets/icons/google-play.svg'

const JoinNow = () => {
    return (
        <div className={styles['content-wrapper']}>
        <div className={styles['content-container']}>
            <h2 className={styles.content}>Sign up and scoot off today</h2>
            <div className={styles['links-container']}>
                <a>
                    <Image src={appStore} width={159} height={56} />
                </a>
                <a>
                    <Image src={googlePlay} width={159} height={56} />
                </a>

            </div>
        </div>
        </div>
    );
};

export default JoinNow;
