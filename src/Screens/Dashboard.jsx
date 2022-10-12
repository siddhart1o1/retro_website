import React from "react";
import Card from "../components/General/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [itmes, setItems] = useState([]);
  const getItems = async () => {
    const repsone = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/user/products`,
      {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(repsone.data);
    setItems(repsone.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  if (itmes.length === 0) {
    return <div className="text-center">No Items Found</div>;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.totalProducts}>
          <span className={styles.title}>Your total Products</span>
          <span className={styles.totalCount}>{itmes.length}</span>
        </div>
        <div className={styles.Products}>
          {itmes.map((item) => (
              <Card
                key={item._id}
                id={item._id}
                title={item.name}
                description={item.description}
                image={item.thumbnail}
                uploadDate={item.createdAt}
                price={item.price}
                location={`${item.country}, ${item.city}`}
                category={item.category}
                likes={item.likes}
              ></Card>
          ))}
        </div>
      </div>
    );
  }
}
