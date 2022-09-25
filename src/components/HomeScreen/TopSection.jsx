import React from "react";
import styles from "./TopSection.module.css";
import TopCategorits from "./TopCategorits";
import TuneIcon from "@mui/icons-material/Tune";
export default function TopSection() {
  return (
    <div className={styles.container}>
      <TopCategorits className={styles.TopCategories}></TopCategorits>
      <div className={styles.FilterButton}>
        <TuneIcon></TuneIcon>
        <span>Filters</span>
      </div>
    </div>
  );
}
