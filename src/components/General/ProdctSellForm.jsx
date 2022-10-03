import React from "react";
import styles from "./ProdctSellForm.module.css";
import { useState } from "react";
import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function ProdctSellForm() {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [thumbnail, setthumbnail] = useState("");
  const [images, setimages] = useState([]);
  const [category, setcategory] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");

  const SumbitForm = (e) => {
    //uplado image to firebase
    e.preventDefault();
    images.forEach((image) => {
      const storageRef = ref(storage, `/files/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
          });
        }
      );
    });
  };

  const ImageUploadHandler = (e) => {
    setimages([...images, e.target.files[0]]);
  };

  console.log(images);
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
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="description">
            Description
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="price">
            Price
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="thumbnail">
            Thumbnail
          </label>
          <input
            className={styles.formInput}
            type="file"
            name="thumbnail"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setthumbnail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="images">
            Images
          </label>
          <input
            className={styles.formInput}
            type="file"
            name="images"
            multiple
            id="images"
            value=""
            onChange={ImageUploadHandler}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="category">
            Category
          </label>
          <input
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
            className={styles.formInput}
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
        </div>
        <button onClick={SumbitForm} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
