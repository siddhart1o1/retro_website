import styles from "./MiddleContainer.module.css";
import React from "react";
import ImageContainer from "./ImageContainer";
export default function MiddleContainer() {
  return (
    <div className={styles.Container} >
      {/* <div className={styles.ImageContainer}> */}
        <ImageContainer></ImageContainer>
      {/* </div> */}
    </div>
  );
}
