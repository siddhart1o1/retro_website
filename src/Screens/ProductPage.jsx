import React from "react";
import styles from "./ProductPage.module.css";
import TopContainer from "../components/ProductPage/TopContainer";
import MiddleContainer from "../components/ProductPage/MiddleContainer";
import ProductDiscription from "../components/ProductPage/ProductDiscription";
import LocationMap from "../components/ProductPage/LocationMap";
import SimialItems from "../components/ProductPage/SimialItems";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarItems, setsimilarItems] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`
      );
      const data = await response.json();
      data.images.push(data.thumbnail);
      setProduct(data);
      // --------------------------------------------------------
      const response2 = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/products?category=${data.category}&limit=8`
      );
      const data2 = await response2.json();
      setsimilarItems(data2);
    };
    getProduct();
  }, [id]);
  console.log("product == >", product);

  if (product) {
    return (
      <div className={styles.TOP}>
        <TopContainer
          name={product.name}
          country={product.country}
          city={product.city}
          likes={product.likes}
        ></TopContainer>
        <MiddleContainer images={product.images} />
        <ProductDiscription
          description={product.description}
          price={product.price}
          createdAt={product.createdAt}
          userData={product.userData}
          user={product.user._id}
          productId={product._id}
          category={product.category}
          owner={product.user.firstName}
        />
        {similarItems && <SimialItems items={similarItems} />}
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          fontSize: "3rem",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default ProductPage;
