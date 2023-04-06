import React from 'react';
import styles from './LearnMore.module.css'
import Button from "@/components/Button/Button";
import Image from "next/image";
import arrow from '@/public/assets/patterns/right-arrow.svg'
import circle from '@/public/assets/patterns/circle.svg'

function LearnMore({flipped, button, content, header, image, hasArrow,  arrowTop, arrowBottom, arrowFlipped, shortArrow}) {
    return (
        <div className={flipped ? `${styles['container-flipped']} ${styles.container}` : styles.container}>
            <div className={styles['content-container']}>
                <h2 className={styles['content-header']}>{header}</h2>
                <p className={styles['content']}>{content}</p>
                {button && <div><Button text={'Learn More'}/></div>}
            </div>

            <div className={styles['image-container']}>
                <Image className={styles.image} src={image} width={445} height={445}/>

                <div className={flipped ? `${styles['circle-flipped']} ${styles.circle}` : styles.circle} >
                    <Image src={circle} height={445} width={445} />
                </div>
            </div>

            {hasArrow &&
                <Image
                className={`${styles.arrow}
                ${arrowFlipped ? styles['arrow-flipped'] : ''}
                ${shortArrow ? styles['short-arrow'] : '' } 
                ${arrowTop ? styles['arrow-top'] : ''}`
            }
                src={arrow}
                width={735}
                height={135} />}


        </div>
    );
}

export default LearnMore;