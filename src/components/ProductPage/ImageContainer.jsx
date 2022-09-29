import React from "react";
import styles from "./ImageContainer.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
const imagesData = [
  { id: 1, src: "https://swiperjs.com/demos/images/nature-1.jpg" },
  { id: 2, src: "https://swiperjs.com/demos/images/nature-2.jpg" },
  { id: 3, src: "https://swiperjs.com/demos/images/nature-3.jpg" },
  { id: 4, src: "https://swiperjs.com/demos/images/nature-4.jpg" },
  { id: 5, src: "https://swiperjs.com/demos/images/nature-5.jpg" },
  { id: 6, src: "https://swiperjs.com/demos/images/nature-6.jpg" },
  { id: 7, src: "https://swiperjs.com/demos/images/nature-7.jpg" },
  { id: 8, src: "https://swiperjs.com/demos/images/nature-8.jpg" },
  { id: 9, src: "https://swiperjs.com/demos/images/nature-9.jpg" },
];

function ImageContainer() {
  const [images, setImages] = React.useState(imagesData[0]);
  const [prev, setPrev] = React.useState(0);
  const [next, setNext] = React.useState(0);
  React.useEffect(() => {

  }, [images]);

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

  return (
    <div className={styles.Container}>
      <div className={styles.ImageContainer}>
        <div className={styles.LeftArrow}>
          <KeyboardArrowLeftIcon onClick={nextImage}></KeyboardArrowLeftIcon>
        </div>
        {imagesData.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt="product"
            className={styles.image}
            style={{
              display: image.id === images.id ? "block" : "none",
            }}
          />
        ))}
        <div className={styles.RightArrow}>
          <KeyboardArrowRightIcon onClick={prevTmage}></KeyboardArrowRightIcon>
        </div>
      </div>
      <div className={styles.Thumb}>
        {imagesData.map((image) =>
          images.id === image.id ? (
            <img
              key={image.id}
              src={image.src}
              alt="product"
              onClick={() => setImages(image)}
              className={styles.imageThumb}
            />
          ) : (
            <img
              key={image.id}
              src={image.src}
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
}

export default ImageContainer;
