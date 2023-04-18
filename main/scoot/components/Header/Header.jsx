import styles from "./Header.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import Hamburger from "@/components/Hamburger/Hamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header className={styles["nav-container"]}>
      <div className={styles["link-container"]}>
        <Hamburger isOpen={isOpen} onClick={handleToggle} />
        <div className={styles["nav-logo"]}>scoot</div>
        <ul className={styles["nav-links"]}>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/locations">Locations</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
        </ul>

        {isOpen && (
          <div className={styles["mobile-container"]}>
            <div className={styles["mobile-link-container"]}>
              <ul className={` ${styles["mobile-links"]} ${styles.mobile}`}>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/locations">Location</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
              </ul>
              <div className={styles["mobile-btn"]}>
                <Button text="Get Scootin" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles["hide"]}>
        <Button text="Get Scootin" />
      </div>
    </header>
  );
}
