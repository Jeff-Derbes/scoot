import React from "react";
import styles from "./MessageUs.module.css";
import Button from "../Button/Button";

export default function MessageUs() {
  return (
    <div className={styles["content-container"]}>
      <h3 className={styles["content-heading"]}>Your City Not Listed?</h3>
      <p className={styles.content}>
        If you’d like to see Scoot in your hometown, be sure to let us know. We
        track requests and plan launches based on demand. Feel free to message
        us by clicking the link or messaging us on social.
      </p>
      <Button className={styles["content-button"]} text="Message Us" />
    </div>
  );
}
