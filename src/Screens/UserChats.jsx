import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import styles from "./UserChats.module.css";
export default function UserChats() {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/chat/userchats`,
        {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setChats(response.data);
    };
    getChats();
  }, []);
  console.log(chats);
  return (
    <div className={styles.TOP}>
      <div className={styles.Title}>Chats</div>
      <div className={styles.Container}>
        {chats.map((chat) => {
          return (
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              className={styles.Card}
              to={`/chat/${chat._id}`}
            >
              <div className={styles.ProductName}> {chat.product.name}</div>
              <div className={styles.ProductOwner}>
                Chating with
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  {chat.product.user.firstName}
                </span>
              </div>
              <div className={styles.UpdatedAt}>
                Last Message {format(chat.updatedAt, "en_US")}
              </div>
              <div className={styles.CreatedAt}>
                Chat Started {format(chat.createdAt, "en_US")}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
