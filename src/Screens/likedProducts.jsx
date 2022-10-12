import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/General/Card";
import styles from "./likedProducts.module.css";
export default function LikedProducts() {
  const [likedProducts, setLikedProducts] = useState(null);
  console.log(`${process.env.REACT_APP_BACKEND_URL}/api/products/user/liked`);

  const getlikedProducts = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/user/liked`,

      {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }
    );

    console.log("liked ---- >", response.data);
    setLikedProducts(response.data);
  };
  useEffect(() => {
    getlikedProducts();
  }, []);

  if (!likedProducts || likedProducts.length === 0) {
    return <h1 
    style={{textAlign:"center",marginTop:"10rem"}}
    >No liked products</h1>;
  } else {
    return (
      <div className={styles.Container}>
        {likedProducts.map((item) => {
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
    );
  }
}
