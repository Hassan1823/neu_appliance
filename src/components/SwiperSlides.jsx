"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Image from "next/image";
const SwiperSlides = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Image src="/Product Card 2.svg" alt="product" fill="true" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/Product Card 2.svg" alt="product" fill="true" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/Product Card 2.svg" alt="product" fill="true" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/Product Card 2.svg" alt="product" fill="true" />
        </SwiperSlide>

        {/* <div className="slider-controller"> */}
        {/* <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div> */}
        {/* <div className="swiper-pagination"></div> */}
        {/* </div> */}
      </Swiper>
    </div>
  );
};

export default SwiperSlides;
