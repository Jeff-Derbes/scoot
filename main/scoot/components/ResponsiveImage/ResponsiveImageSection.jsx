import React from "react";
import styles from "./ResponsiveImageSection.module.css";
import Image from "next/image";

export default function ResponsiveImageSection(props) {
  return (
    <div className={styles["image-container"]}>
      <div className={styles["image-desktop"]}>
        <Image src={props.imageDesktop} alt="World Map" fill={true} />
      </div>
      <div className={styles["image-tablet"]}>
        <Image src={props.imageTablet} alt="World Map" fill={true} />
      </div>
      <div className={styles["image-mobile"]}>
        <Image src={props.imageMobile} alt="World Map" fill={true} />
      </div>
    </div>
  );
}
