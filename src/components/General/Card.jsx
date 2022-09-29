import React from "react";
import Styles from "./Card.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export default function Card({ title, description, image, uploadDate, price, location, id }) {
  const [isFavourite, setIsFavourite] = React.useState(false);
  return (
    <div className={Styles.Container}>
      <Link to={`/product/${id}`} style={{color:"inherit"}}>
        <div className={Styles.ImageContainer}>
          <div className={Styles.FavouriteIcon}>
            {isFavourite ? (
              <FavoriteIcon
                onClick={() => setIsFavourite(!isFavourite)}
                style={{ color: "red" }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => setIsFavourite(!isFavourite)}
                style={{ color: "white" }}
              />
            )}
          </div>
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
            <div className={Styles.UploadDate}>{uploadDate}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
