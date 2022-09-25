import { color } from "@mui/system";
import React from "react";
import styles from "./TopCategoriesCard.module.css";
export default function TopCategoriesCard({ id, name, image, link }) {
  const [selected, setSelected] = React.useState(false);

  return (
    <div
      className={styles.Container}
      style={selected ? { color: "white", backgroundColor: "black" } : {}}
      onClick={() => setSelected(!selected)}
    >
      <img className={styles.Image} src={image} alt={name} />
      <h3 className={styles.Title}> {name}</h3>
    </div>
  );
}
