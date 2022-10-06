import React from "react";
import styles from "./SimialItems.module.css";
import Card from "../General/Card";


export default function SimialItems({ items }) {
  return (
    <div className={styles.TOP}>
      <div className={styles.Title}> More Simlair Items </div>
      <div className={styles.Container}>
        {items.map((item) => {
          return (
            <Card
              key={item._id}
              id={item._id}
              title={item.name}
              description={item.description}
              image={item.thumbnail}
              uploadDate={item.createdAt}
              price={item.price}
              location={`${item.country} ${item.city}`}
              category={item.category}
              likes={item.likes}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
