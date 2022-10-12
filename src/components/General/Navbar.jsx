import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import { useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Badge from "@mui/material/Badge";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const searchRef = useRef();
  const navigate = useNavigate();

  const searchHandler = (e) => {
    if (searchRef.current.value === "") {
      alert("please enter a search term");
    } else {
      console.log(searchRef.current.value);
      navigate(`/search?q=${searchRef.current.value}`);
      searchRef.current.value = "";
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  };

  const CloseHandler = () => {
    setIsProfileOpen(false);
    setIsCategoryOpen(false);
  };

  return (
    <div className={styles.TOP}>
      <div className={styles.container}>
        <div className={styles.LeftContainer}>
          <Logo size={"2em"}></Logo>
        </div>
        <div className={styles.CenterContainer}>
          <div className={styles.searchContiner}>
            <input
              className={styles.Search}
              type="text"
              placeholder="Anything in Your Mind?"
              ref={searchRef}
            />
            <div className={styles.SearchIcon}>
              <SearchIcon onClick={searchHandler} />
            </div>
          </div>
        </div>
        <div className={styles.RightContainer}>
          {/* <div
            className={styles.LeftItems}
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <CategoryIcon></CategoryIcon>
            <span>Categories</span>
          </div> */}
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to="/user/sell"
            className={styles.SellButton}
          >
            <span>SELL</span>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/user/chats"
            className={styles.LeftItems}
          >
            {/* <Badge badgeContent={4} color="primary"> */}
            <ChatBubbleIcon></ChatBubbleIcon>
            {/* </Badge> */}
            <span>Chat</span>
          </Link>
          <Link
            style={{ color: "inherit" }}
            className={styles.LeftItems}
            to="/user/liked"
          >
            <FavoriteIcon style={{ color: "red" }}></FavoriteIcon>
            <span>Liked</span>
          </Link>
          {user ? (
            <div
              className={styles.ProfileCOntainer}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <img className={styles.profilePic} src="/images.jpg" alt="" />
              <span>Hi {user.firstName}</span>
              <ArrowDropDownIcon></ArrowDropDownIcon>
              {isProfileOpen && (
                <div className={styles.profileDropDown}>
                  {/* <span className={styles.ProfileList}>
                    <AccountCircleIcon />
                    Profile
                  </span> */}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    to="/user/dashboard"
                    className={styles.ProfileList}
                  >
                    <DashboardIcon />
                    Your Products
                  </Link>
                  <span className={styles.ProfileList} onClick={logoutHandler}>
                    <LogoutIcon />
                    Logout
                  </span>
                </div>
              )}
            </div>
          ) : (
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/login"
              className={styles.LoginSignUp}
            >
              <span>Login or SignUp</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
