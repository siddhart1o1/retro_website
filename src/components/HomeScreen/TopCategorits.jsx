import React from "react";
import styles from "./TopCategorits.module.css";
import TopCategoriesCard from "./TopCategoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const categories = [
  {
    id: 1,
    name: "Mobiles",
    image: "/TopCategory/img.png",
    link: "/mobiles",
  },
  {
    id: 2,
    name: "Laptops",
    image: "/TopCategory/img.png",
    link: "/laptops",
  },
  {
    id: 3,
    name: "Watches",
    image: "/TopCategory/img.png",
    link: "/watches",
  },
  {
    id: 4,
    name: "Headphones",
    image: "/TopCategory/img.png",
    link: "/headphones",
  },
  {
    id: 5,
    name: "Shoes",
    image: "/TopCategory/img.png",
    link: "/shoes",
  },
  {
    id: 6,
    name: "Clothes",
    image: "/TopCategory/img.png",
    link: "/clothes",
  },
  {
    id: 7,
    name: "Home ",
    image: "/TopCategory/img.png",
    link: "/home-",
  },
  {
    id: 8,
    name: "Kitchen ",
    image: "/TopCategory/img.png",
    link: "/kitchen-",
  },
  {
    id: 8,
    name: "Kitchen ",
    image: "/TopCategory/img.png",
    link: "/kitchen-",
  },
  {
    id: 8,
    name: "Kitchen ",
    image: "/TopCategory/img.png",
    link: "/kitchen-",
  },
  {
    id: 8,
    name: "Kitchen ",
    image: "/TopCategory/img.png",
    link: "/kitchen-",
  },
  {
    id: 8,
    name: "Kitchen ",
    image: "/TopCategory/img.png",
    link: "/kitchen-",
  },
  {
    id: 8,
    name: "Kitchen ",
    image: "/TopCategory/img.png",
    link: "/kitchen-",
  },
  {
    id: 8,
    name: "Kitchen ",
    image: "/TopCategory/img.png",
    link: "/kitchen-",
  },
];

export default function TopCategorits() {
  const swiperRef = React.useRef(null);
  return (
    <div className={styles.Container}>
      <ArrowCircleLeftIcon
        id="previousButton"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      />

      <Swiper slidesPerView={10} ref={swiperRef}>
        {categories.map((category) => {
          return (
            <SwiperSlide>
              <TopCategoriesCard
                key={category.id}
                name={category.name}
                image={category.image}
                link={category.link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowCircleRightIcon
        id="nextButton"
        onClick={() => swiperRef.current.swiper.slideNext()}
      />
    </div>
  );
}
