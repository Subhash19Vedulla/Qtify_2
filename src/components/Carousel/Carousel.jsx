import React, { useEffect } from 'react';
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from "./CarouselRight/CarouselRight";

import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./Carousel.module.css";
import { Navigation } from 'swiper/modules';

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data, swiper]); // include swiper dependency

  return null;
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper} data-testid="carousel">
      <Swiper
        initialSlide={0}
        spaceBetween={40}
        slidesPerView={4}
        slidesPerGroup={4}
        modules={[Navigation]}
        navigation
        allowTouchMove
      >
        <Controls data={data} />
        {/* Navigation arrows */}
        <CarouselLeft />
        <CarouselRight />
        {/* Slides */}
        {data.map((item, index) => (
          <SwiperSlide key={index} data-testid={`carousel-slide-${index}`}>
            {renderCardComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
