import React from "react";
import styles from "./MiddleSection.module.css";
import Card from "../General/Card";

const data = [
  {
    id: 1,
    title: "title1",
    description: "description1",
    image: "/photos/sample.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
    image: "/photos/sample.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
    image: "/photos/img2.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 4,
    title: "title4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quam laborum ea ratione rerum quo consequatur repellendus eius cumque totam fugiat qui deleniti aliquam autem cupiditate commodi, consequuntur, corporis itaque?",
    image: "/photos/sample.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 5,
    title: "title5",
    description: "description5",
    image: "/photos/sample.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 1,
    title: "title1",
    description: "description1",
    image: "/photos/sample.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
    image: "/photos/sample.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
    image: "/photos/img2.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 4,
    title: "title4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quam laborum ea ratione rerum quo consequatur repellendus eius cumque totam fugiat qui deleniti aliquam autem cupiditate commodi, consequuntur, corporis itaque?",
    image: "/photos/sample.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 5,
    title: "title5",
    description: "description5",
    image: "/photos/sample.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 4,
    title: "title4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quam laborum ea ratione rerum quo consequatur repellendus eius cumque totam fugiat qui deleniti aliquam autem cupiditate commodi, consequuntur, corporis itaque?",
    image: "/photos/sample.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
  {
    id: 5,
    title: "title5",
    description: "description5",
    image: "/photos/sample.webp",
    uploadDate: "3 days ago",
    price: "100",
    location: "india",
  },
];

export default function MiddleSection({ category }) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    setItems(data);
  }, [category]);

  return (
    <div className={styles.TOP}>
      <div className={styles.Container}>
        {items.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              uploadDate={item.uploadDate}
              price={item.price}
              location={item.location}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
