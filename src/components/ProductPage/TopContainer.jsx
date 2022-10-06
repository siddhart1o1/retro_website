import React from "react";
import styles from "./TopContainer.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function TopContainer({ name, country, city, likes }) {
  return (
    <div className={styles.TopContainer}>
      <div className={styles.TopLeft}>
        <h1 className={styles.Title}>{name}</h1>
        <span className={styles.Location}>
          {country}, {city}
        </span>
      </div>
      <div className={styles.TopRight}>
        <div className={styles.TopRightIcons}>
          Share <ShareIcon></ShareIcon>
        </div>
        <div className={styles.TopRightIcons}>
          Likes <FavoriteIcon></FavoriteIcon>
        </div>
      </div>
    </div>
  );
}
