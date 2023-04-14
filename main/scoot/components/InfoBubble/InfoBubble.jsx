import styles from "./InfoBubble.module.css";
import Image from "next/image";

export default function InfoBubble(props) {
  return (
    <div className={styles["content-container"]}>
      <div className={styles["image-container"]}>
        <Image
          src={props.image}
          className={styles.image}
          alt={props.alt}
          width={240}
          height={240}
        />
        <div className={styles.count}>{props.count}</div>
      </div>
      <div className={styles["text-container"]}>
        <h3 className={styles["header"]}>{props.header}</h3>
        <p className={styles["text"]}>{props.text}</p>
      </div>
    </div>
  );
}
