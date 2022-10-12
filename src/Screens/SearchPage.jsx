import React from "react";
import styles from "./SearchPage.module.css";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import Card from "../components/General/Card";
export default function SearchPage() {
  let [searchParams, setSearchParams] = useSearchParams();

  const [items, setItems] = React.useState([]);
  const search = searchParams.get("q");

  const getResult = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/search?query=${search}`
    );
    setItems(response.data);
  };
  useEffect(() => {
    getResult();
  }, [search]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80em",
        margin: "1em auto ",
      }}
    >
      <p>search result for {search} </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap:"1em",
        }}
      >
        {items.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            title={item.name}
            description={item.description}
            image={item.thumbnail}
            uploadDate={item.createdAt}
            price={item.price}
            location={`${item.country} ${item.city}`}
            category={item.category}
            likes={item.likes}
          ></Card>
        ))}
      </div>
    </div>
  );
}
