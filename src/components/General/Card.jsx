import React from "react";
import Styles from "./Card.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { height } from "@mui/system";
import axios from "axios";
export default function Card({
  title,
  description,
  image,
  uploadDate,
  price,
  location,
  id,
  width,
  height,
  likes,
}) {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (user) {
    var isLiked = likes.includes(user._id);
  } else {
    var isLiked = false;
  }

  const [isFavourite, setIsFavourite] = React.useState(isLiked);

  const handelLike = async () => {
    if (user) {
      setIsFavourite(!isFavourite);
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/products/like/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        }
      );
    }
    else{
      alert("Please Login First")
    }
  };

  return (
    <div
      style={{
        width: width,
        height: height,
      }}
      className={Styles.Container}
    >
      <div className={Styles.FavouriteIcon}>
        {isFavourite ? (
          <FavoriteIcon onClick={handelLike} style={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon onClick={handelLike} style={{ color: "gray" }} />
        )}
      </div>

      <Link to={`/product/${id}`} style={{ color: "inherit" }}>
        <div className={Styles.ImageContainer}>
          <img lassName={Styles.Image} src={image} alt="sample" />
        </div>
        <div className={Styles.ContentContainer}>
          <div className={Styles.leftContainer}>
            <div className={Styles.Title}>{title}</div>
            <div className={Styles.Description}>{description}</div>
            <div className={Styles.Location}>{location}</div>
            <div className={Styles.Price}>${price}</div>
          </div>
          <div className={Styles.RightContainer}>
            <div className={Styles.UploadDate}>
              {format(uploadDate, "en_US")}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
