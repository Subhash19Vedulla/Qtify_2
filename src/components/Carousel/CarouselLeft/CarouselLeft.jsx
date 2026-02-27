import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from "./CarouselLeft.module.css";

const CarouselLeft = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <button
          className={styles.leftButton}
          onClick={() => swiper.slidePrev()}
          data-testid="carousel-left"
          aria-label="Previous Slide"
        >
          <LeftArrow />
        </button>
      )}
    </div>
  );
};

export default CarouselLeft;
