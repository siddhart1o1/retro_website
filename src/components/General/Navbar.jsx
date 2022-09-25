import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CategoryIcon from "@mui/icons-material/Category";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

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
            />
            <SearchIcon />
          </div>
        </div>
        <div className={styles.RightContainer}>
          <div
            className={styles.LeftItems}
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <CategoryIcon></CategoryIcon>
            <span>Categories</span>
          </div>
          <div className={styles.LeftItems}>
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon></NotificationsIcon>
            </Badge>
            <span>Notification</span>
          </div>
          <div className={styles.LeftItems}>
            <Badge badgeContent={4} color="primary">
              <ChatBubbleIcon></ChatBubbleIcon>
            </Badge>
            <span>Chat</span>
          </div>
          <div className={styles.LeftItems}>
            <FavoriteIcon style={{ color: "red" }}></FavoriteIcon>
            <span>Liked</span>
          </div>
          <div
            className={styles.ProfileCOntainer}
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <img className={styles.profilePic} src="/images.jpg" alt="" />
            <span>Hi Siddharth</span>
            <ArrowDropDownIcon></ArrowDropDownIcon>
            {isProfileOpen && (
              <div className={styles.profileDropDown}>
                <span className={styles.ProfileList}>
                  <AccountCircleIcon />
                  Profile
                </span>
                <span className={styles.ProfileList}>
                  <DashboardIcon />
                  Dashboard
                </span>
                <span className={styles.ProfileList}>
                  <LogoutIcon />
                  Logout
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
