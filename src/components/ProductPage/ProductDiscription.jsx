import React from "react";
import styles from "./ProductDiscription.module.css";
import Seprator from "../General/Seprator";
export default function ProductDiscription({description, price, createdAt}) {
  return (
    <div className={styles.contianer}>
      <div className={styles.LeftConatiner}>
        <div className={styles.soldBy}>
          <div>
            <div className={styles.Title}>Mobile phone Sold by Siddharth</div>
            <div className={styles.date}>Posted on 3rd Agust</div>
          </div>
          <div className={styles.ProfileConatiner}>
            <img className={styles.ProfileImage} src="/images.jpg" alt="" />
          </div>
        </div>
        <Seprator />
        <div className={styles.Desc}>{description}</div>
      </div>

      <div className={styles.RightContainer}>
        <div className={styles.PriceConatainer}>${price}</div>
        <div className={styles.RighConatinerChat}> Chat with Owner</div>
        <div className={styles.RighConatinerOffer}>Make an offer</div>
      </div>
    </div>
  );
}
