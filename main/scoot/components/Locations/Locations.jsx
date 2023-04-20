import styles from "./Locations.module.css";

export default function Locations() {
  return (
    <div className={styles["locations-container"]}>
      <div className={styles["location"]}>New York</div>
      <div className={styles["location"]}>London</div>
      <div className={styles["location"]}>Jakarta</div>
      <div className={styles["location"]}>Yokohama</div>
    </div>
  );
}
