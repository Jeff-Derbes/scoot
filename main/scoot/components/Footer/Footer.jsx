import styles from "./Footer.module.css";
import Image from "next/image";
import facebook from "public/assets/icons/facebook.svg";
import instagram from "public/assets/icons/instagram.svg";
import twitter from "public/assets/icons/twitter.svg";

export default function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-wrapper"]}>
        <div className={styles["link-container"]}>
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
        </div>
        <div className={styles["socials-container"]}>
          <ul className={styles["social-links"]}>
            <li>
              <a href="">
                <Image src={facebook} width={20} height={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={instagram} width={20} height={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={twitter} width={20} height={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
