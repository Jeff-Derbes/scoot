import React from "react";
import { useState } from "react";
import styles from "./FaqCard.module.css";

export default function FaqCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["faq-dropdown"]}>
      <h3 onClick={handleClick} className={styles["faq-question"]}>
        {props.question}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
          &#x25BC;
        </span>
      </h3>
      <div
        className={`${styles["faq-answer-wrapper"]} ${
          isOpen ? styles.open : ""
        }`}
      >
        <p className={styles["faq-answer"]}>{props.answer}</p>
      </div>
    </div>
  );
}
