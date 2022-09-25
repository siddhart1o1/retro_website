import React from "react";
import styles from "./TopCategoriesCard.module.css";
export default function TopCategoriesCard({ id, name, image, link }) {
  return (
    <div className={styles.Container}>
      <img className={styles.Image} src={image} alt={name} />
      <h3 className={styles.Title}> {name}</h3>
    </div>
  );
}
