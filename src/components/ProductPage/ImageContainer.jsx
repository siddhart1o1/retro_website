import React from "react";
import styles from "./ImageContainer.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
let imagesData = [
  "https://swiperjs.com/demos/images/nature-1.jpg" ,
  "https://swiperjs.com/demos/images/nature-2.jpg" ,
  "https://swiperjs.com/demos/images/nature-3.jpg" ,
  "https://swiperjs.com/demos/images/nature-4.jpg" ,
  "https://swiperjs.com/demos/images/nature-5.jpg" ,
  "https://swiperjs.com/demos/images/nature-6.jpg" ,
  "https://swiperjs.com/demos/images/nature-7.jpg" ,
  "https://swiperjs.com/demos/images/nature-8.jpg" ,
  "https://swiperjs.com/demos/images/nature-9.jpg" ,
];

function ImageContainer({ imagesData }) {
  const [images, setImages] = React.useState(imagesData[0]);
  const [prev, setPrev] = React.useState(0);
  const [next, setNext] = React.useState(0);

  const nextImage = () => {
    if (next < imagesData.length - 1) {
      setNext(next + 1);
      setImages(imagesData[next + 1]);
    } else {
      setNext(0);
      setImages(imagesData[0]);
    }
  };

  const prevTmage = () => {
    if (prev > 0) {
      setPrev(prev - 1);
      setImages(imagesData[prev - 1]);
    } else {
      setPrev(imagesData.length - 1);
      setImages(imagesData[imagesData.length - 1]);
    }
  };
  if (imagesData.length > 0) {
    return (
      <div className={styles.Container}>
        <div className={styles.ImageContainer}>
          <div className={styles.LeftArrow}>
            <KeyboardArrowLeftIcon onClick={nextImage}></KeyboardArrowLeftIcon>
          </div>
          {imagesData.map((image) => (
            <img
              src={image}
              alt="product"
              className={styles.image}
              style={{
                display: image === images ? "block" : "none",
              }}
            />
          ))}
          <div className={styles.RightArrow}>
            <KeyboardArrowRightIcon
              onClick={prevTmage}
            ></KeyboardArrowRightIcon>
          </div>
        </div>
        <div className={styles.Thumb}>
          {imagesData.map((image) =>
            images === image ? (
              <img
                key={image}
                src={image}
                alt="product"
                onClick={() => setImages(image)}
                className={styles.imageThumb}
              />
            ) : (
              <img
                key={image}
                src={image}
                alt="product"
                className={styles.imageThumb}
                onClick={() => setImages(image)}
                style={{
                  opacity: 0.5,
                }}
              />
            )
          )}
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default ImageContainer;
