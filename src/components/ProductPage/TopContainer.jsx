import React from "react";
import styles from "./TopContainer.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function TopContainer() {
  return (
    <div className={styles.TopContainer}>
      <div className={styles.TopLeft}>
        <h1 className={styles.Title}>Product Page</h1>
        <span className={styles.Location}>Location, India</span>
      </div>
      <div className={styles.TopRight}>
        <div className={styles.TopRightIcons}>
          Share <ShareIcon></ShareIcon>
        </div>
        <div className={styles.TopRightIcons}>
          Like <FavoriteIcon></FavoriteIcon>
        </div>
      </div>
    </div>
  );
}
