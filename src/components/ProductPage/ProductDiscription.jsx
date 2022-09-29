import React from "react";
import styles from "./ProductDiscription.module.css";
import Seprator from "../General/Seprator" 
export default function ProductDiscription() {
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
          <Seprator/>

        <div className={styles.Desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
          necessitatibus, dicta animi numquam eligendi perspiciatis. Dolorum sed
          dolore ducimus accusantium deserunt ipsum doloremque? Rerum,
          laboriosam iure non nostrum cumque labore Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum nulla veritatis nostrum, ducimus
          possimus aliquid? Pariatur totam officia odit in voluptatem ex error
          dolor porro mollitia incidunt. Quisquam, porro asperiores. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eius ipsam nihil
          molestias doloribus iure culpa esse modi hic, aliquid consequatur
          accusantium enim aliquam, porro pariatur blanditiis! Consequuntur amet
          maxime quas.
        </div>
      </div>

      <div className={styles.RightContainer}>
        <div className={styles.PriceConatainer}>$3000</div>
        <div className={styles.RighConatinerChat}> Chat with Owner</div>
        <div className={styles.RighConatinerOffer}>Make an offer</div>
      </div>
    </div>
  );
}
