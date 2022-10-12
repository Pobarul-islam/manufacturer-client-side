
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Banner.css'


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <div className="mb-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          
          <img src="https://i.ibb.co/h10hLPP/slide-1.jpg" alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/kgDr0ZT/slide-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/s6cBPk3/slide-3.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
// https://i.ibb.co/h10hLPP/slide-1.jpg
// https://i.ibb.co/kgDr0ZT/slide-2.jpg
// https://i.ibb.co/s6cBPk3/slide-3.jpg