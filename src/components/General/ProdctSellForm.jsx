import React from "react";
import styles from "./ProdctSellForm.module.css";
import { useState } from "react";
import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";

export default function ProdctSellForm() {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [thumbnail, setthumbnail] = useState(null);
  const [images, setimages] = useState([]);
  const [category, setcategory] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");

  const PostProduct = async (IMAGE_URLS, THUMBNAIL_URL) => {
    const data = {
      name: name,
      description: description,
      price: price,
      images: IMAGE_URLS,
      category: category,
      country: country,
      city: city,
      thumbnail: THUMBNAIL_URL,
    };
    console.log(data);
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/products`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(response);
  };

  const UploadImnages = async () => {
    let IMAGE_URLS = [];
    let THUMBNAIL_URL;
    // uploading product images

    return new Promise((resolve, reject) => {
      images.forEach((image) => {
        const uniqueName = Date.now() + "RETRO" + image.name;
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => console.log("uploading Images"),
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              IMAGE_URLS.push(downloadURL);
              if (IMAGE_URLS.length === images.length) {
                resolve(IMAGE_URLS);
              }
            });
          }
        );
      });
    }).then((IMAGE_URLS) => {
      // uploading thumbnail
      const uniqueName = Date.now() + "RETRO" + thumbnail.name;
      const storageRef = ref(storage, `images/${uniqueName}`);
      const uploadTask = uploadBytesResumable(storageRef, thumbnail);

      uploadTask.on(
        "state_changed",
        (snapshot) => console.log("uploading thumbnail"),
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            THUMBNAIL_URL = downloadURL;
            PostProduct(IMAGE_URLS, THUMBNAIL_URL);
          });
        }
      );
    });
  };

  const SumbitForm = async (e) => {
    e.preventDefault();
    await UploadImnages();
  };

  const RemoveImage = (e) => {};
  const ImageUploadHandler = (e) => {
    setimages([...images, e.target.files[0]]);
  };

  return (
    <div className={styles.container}>
      <form className={styles.Form} action="">
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">
            Name
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="price">
            Price
          </label>
          <input
            className={styles.formInput}
            type="number"
            name="price"
            id="price"
            placeholder="0"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="category">
            Category
          </label>
          <input
            placeholder="Category"
            className={styles.formInput}
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="country">
            Country
          </label>
          <input
            placeholder="Country"
            className={styles.formInput}
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={(e) => setcountry(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="city">
            City
          </label>
          <input
            placeholder="City"
            className={styles.formInput}
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="description">
            Description
          </label>
          <textarea
            className={styles.formInput}
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="description"
          />
        </div>
        {/*  thumb nale and images  uploading ---------------------- */}
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="thumbnail">
            Thumbnail
          </label>
          <input
            className={styles.formInput}
            type="file"
            name="thumbnail"
            id="thumbnail"
            accept="image/x-png,image/gif,image/jpeg"
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              color: "transparent",
              borderRadius: "0px",
            }}
            value=""
            onChange={(e) => setthumbnail(e.target.files[0])}
          />
        </div>
        {thumbnail ? (
          <div className={styles.UploadedImagecontainer}>
            <img
              className={styles.UploadedImage}
              src={URL.createObjectURL(thumbnail)}
              alt=""
            />
          </div>
        ) : null}
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="images">
            Images
          </label>
          <input
            className={styles.formInput}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              color: "transparent",
              borderRadius: "0px",
            }}
            type="file"
            name="images"
            multiple
            id="images"
            accept="image/x-png,image/gif,image/jpeg"
            value=""
            onChange={ImageUploadHandler}
          />
        </div>
        {images.length > 0 && (
          <div className={styles.UploadedImagecontainer}>
            {images.map((image) => (
              <img
                key={image.name}
                onClick={RemoveImage}
                className={styles.UploadedImage}
                src={URL.createObjectURL(image)}
                alt=""
              />
            ))}
          </div>
        )}
        <div className={styles.ButtonConatiner}>
          <button
            className={styles.SubmitButton}
            onClick={SumbitForm}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
