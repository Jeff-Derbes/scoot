import styles from "./SingleListing.module.css";
import Button from "../Button/Button";

export default function SingleListing(props) {
  return (
    <div className={styles.listing}>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.location}>{props.location}</p>
      </div>
      <div className={styles.button}>
        <Button text="Apply" />
      </div>
    </div>
  );
}
