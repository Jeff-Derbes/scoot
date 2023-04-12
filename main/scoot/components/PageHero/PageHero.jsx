import Image from "next/image";
import styles from "./PageHero.module.css";
import circles from "../../public/assets/patterns/white-circles.svg";

export default function PageHero(props) {
  return (
    <div
      className={styles["hero-container"]}
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div className={styles["content-container"]}>
        <h1 className={styles["hero-content"]}>{props.title}</h1>

        <Image
          src={circles}
          className={styles.circles}
          alt="line"
          width={234}
          height={63}
        />
      </div>
    </div>
  );
}
