import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className={styles["nav-container"]}>
      <div className={styles["link-container"]}>
        <div className={styles["nav-logo"]}>scoot</div>
        <ul className={styles["nav-links"]}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <Button className={styles["nav-btn"]} text="Get Scootin" />
    </header>
  );
}
