import React from "react";
import styles from "./FaqContainer.module.css";

export default function FaqContainer(props) {
  return (
    <div className={styles["faq-container"]}>
      <h2 className={styles.header}>{props.header}</h2>
      <div className={styles.FAQs}>{props.children}</div>
    </div>
  );
}
