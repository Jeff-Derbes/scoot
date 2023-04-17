import SingleListing from "../SingleListing/SingleListing";
import styles from "./JobListings.module.css";

export default function JobListings() {
  return (
    <div className={styles["listings-container"]}>
      <SingleListing title="General Manager" location="Jakarta, Indonesia" />

      <SingleListing title="UI/UX Designer" location="Yokohama, Japan" />

      <SingleListing
        title="Blog Content Copywriter"
        location="New York, United States"
      />

      <SingleListing
        title="Graphic Designer"
        location="New York, United States"
      />

      <SingleListing title="Fleet Supervisor" location="Jakarta, Indonesia" />

      <SingleListing title="UX Analyst" location="London, United Kingdom" />
    </div>
  );
}
