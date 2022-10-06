import styles from "./MiddleContainer.module.css";
import React from "react";
import ImageContainer from "./ImageContainer";
export default function MiddleContainer({ images }) {
  return (
    <div className={styles.Container}>
      {/* <div className={styles.ImageContainer}> */}
      <ImageContainer imagesData={images}></ImageContainer>
      {/* </div> */}
    </div>
  );
}
