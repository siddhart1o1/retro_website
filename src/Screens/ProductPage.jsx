import React from "react";
import styles from "./ProductPage.module.css";
import TopContainer from "../components/ProductPage/TopContainer";
import MiddleContainer from "../components/ProductPage/MiddleContainer";
import ProductDiscription from "../components/ProductPage/ProductDiscription";
import LocationMap from "../components/ProductPage/LocationMap";
import SimialItems from "../components/ProductPage/SimialItems";

function ProductPage() {
  return (
    <div className={styles.TOP}>
      <TopContainer></TopContainer>
      <MiddleContainer></MiddleContainer>
      <ProductDiscription></ProductDiscription>
      <LocationMap></LocationMap>
      <SimialItems></SimialItems>
    </div>
  );
}

export default ProductPage;
