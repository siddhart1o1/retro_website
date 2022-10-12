import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./ChatScreen.module.css";
import io from "socket.io-client";

export default function ChatScreen() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  const socket = useRef();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { id } = useParams();
  let current_user_id = localStorage.getItem("userInfo");
  current_user_id = JSON.parse(current_user_id)._id;
  // *******************************************

  useEffect(() => {
    socket.current = io("ws://retrosocket.herokuapp.com/");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        message: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  // *******************************************

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  // *******************************************

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {});
  }, [user]);

  // *******************************************

  useEffect(() => {
    const getChatData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/chat/getchat/${id}`,
          {
            headers: {
              Authorization: `${localStorage.getItem("accessToken")}`,
            },
          }
        );
        console.log(res.data);
        setCurrentChat(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getChatData();
  }, [id]);
  // *******************************************

  useEffect(() => {
    const getMessages = async () => {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/chat/message/${id}`,
        {
          chatId: id,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setMessages(response.data);
    };
    getMessages();
  }, []);

  // *******************************************
  const sendMessageHandler = async () => {
    console.log(currentChat);
    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId: receiverId,
      text: message,
    });

    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/chat/message`,
      {
        message: message,
        chatId: id,
        sender: localStorage.getItem("_id"),
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }
    );
    response.data.sender = {
      _id: current_user_id,
    };
    setMessages([...messages, response.data]);
    setMessage("");
  };

  // *******************************************
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={styles.container}>
      <div className={styles.messageConainer} ref={scrollRef}>
        {messages.map(
          (message) =>
            (message.sender._id === current_user_id && (
              <div className={styles.SenderMessages} ref={scrollRef}>
                <div className={styles.messageText}>{message.message}</div>
              </div>
            )) || (
              <div className={styles.ReceiverMessages} ref={scrollRef}>
                <div className={styles.messageText}>{message.message}</div>
              </div>
            )
        )}
      </div>
      <div className={styles.messageInputContainer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.messageinput}
        />
        <button className={styles.messageButton} onClick={sendMessageHandler}>
          Send
        </button>
      </div>
    </div>
  );
}
