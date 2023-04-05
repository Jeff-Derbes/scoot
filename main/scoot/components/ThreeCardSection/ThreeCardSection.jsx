import styles from './ThreeCardSection.module.css'
import locate from '@/public/assets/icons/locate.svg'
import scooter from '@/public/assets/icons/scooter.svg'
import ride from '@/public/assets/icons/ride.svg'
import Image from "next/image";


function ThreeCardSection(props) {
    return (
        <div className={styles['content-container']}>
            <div className={styles.line}></div>
            <div className={styles['card-container']}>
                <div className={styles['card-icon']}>
                    <Image src={locate} className={styles.icon} alt='line' width={96} height={96}/>
                </div>
                <div className={styles['content-wrapper']}>
                    <h3 className={styles['card-header']}>Locate with app</h3>
                    <p className={styles['card-content']}>Use the app to find the nearest scooter to you. We are
                        continuously placing scooters in the areas with most demand, so one should never be too far
                        away. </p>
                </div>
            </div>

            <div className={styles['card-container']}>
                <div className={styles['card-icon']}>
                    <Image src={scooter} className={styles.icon} alt='line' width={96} height={96}/>
                </div>
                <div className={styles['content-wrapper']}>
                    <h3 className={styles['card-header']}>Pick your scooter</h3>
                    <p className={styles['card-content']}>We show the most important info for the scooters closest to
                        you.
                        So you know how much charge they have left and can see roughly how much it will cost.</p>
                </div>
            </div>

            <div className={styles['card-container']}>
                <div className={styles['card-icon']}>
                    <Image src={ride} className={styles.icon} alt='line' width={96} height={96}/>
                </div>
                <div className={styles['content-wrapper']}>
                    <h3 className={styles['card-header']}>Enjoy the ride</h3>
                    <p className={styles['card-content']}>Scan the QR code and the bike will unlock. Retract the cable
                        lock,
                        put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility
                        ramps.</p>
                </div>
            </div>
        </div>
    );
}

export default ThreeCardSection;