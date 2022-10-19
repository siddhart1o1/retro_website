import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopCategoriesCard.module.css";
export default function TopCategoriesCard({
  id,
  name,
  image,
  link,
  selected_category,
}) {
  const [selected, setSelected] = React.useState(false);

  return (
    <Link style={{ color: "inherit" }} to={`/${name}`}>
      <div
        className={styles.Container}
        style={{
          color: selected_category ? "white" : "inherit",
          backgroundColor: selected_category ? "#ff3f6c" : null,
        }}
        onClick={() => setSelected(!selected)}
      >
        <img className={styles.Image} src={image} alt={name} />
        <h3 className={styles.Title}> {name}</h3>
      </div>
    </Link>
  );
}
