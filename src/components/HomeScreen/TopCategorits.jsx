import React from "react";
import { useEffect } from "react";
import styles from "./TopCategorits.module.css";
import TopCategoriesCard from "./TopCategoriesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import DATA from "../../category";
const categories = DATA;

export default function TopCategorits({ Selectedcategory }) {
  const swiperRef = React.useRef(null);
  return (
    <div className={styles.Container}>
      <KeyboardArrowLeftIcon
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
                selected_category={
                  Selectedcategory === category.name ? true : false
                }
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <KeyboardArrowRightIcon
        id="nextButton"
        onClick={() => swiperRef.current.swiper.slideNext()}
      />
    </div>
  );
}
