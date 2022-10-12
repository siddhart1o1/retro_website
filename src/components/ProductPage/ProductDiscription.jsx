import React from "react";
import styles from "./ProductDiscription.module.css";
import Seprator from "../General/Seprator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";
export default function ProductDiscription({
  description,
  price,
  createdAt,
  user,
  productId,
  owner,
  category,
}) {
  const navigateTo = useNavigate();
  const ChatHandler = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/chat`,
      {
        receiverId: user,
        productId: productId,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log("response.data ==>", response.data);
    console.log("navigating to chat");
    navigateTo(`/chat/${response.data._id}`);
  };

  return (
    <div className={styles.contianer}>
      <div className={styles.LeftConatiner}>
        <div className={styles.soldBy}>
          <div>
            <div className={styles.Title}>
              {category} Sold by {owner}
            </div>
            <div className={styles.date}>Posted {format(createdAt)}</div>
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
        <div className={styles.RighConatinerChat} onClick={ChatHandler}>
          Chat with Owner
        </div>
      </div>
    </div>
  );
}
