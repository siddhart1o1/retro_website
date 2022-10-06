import React from "react";
import styles from "./MiddleSection.module.css";
import Card from "../General/Card";
import { useEffect } from "react";
import axios from "axios";

export default function MiddleSection({ category }) {
  const [items, setItems] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/products?category=${category}`
      );
      console.log(response);
      setItems(response.data);
      setIsFetching(false);
    };
    getProducts();
  }, [category]);

  if (items.length > 0) {
    return (
      <div className={styles.TOP}>
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
  } else if (isFetching) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Nothing Here
      </div>
    );
  }
}
