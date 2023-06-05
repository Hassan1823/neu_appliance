"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImagesForSlider = [
  {
    src: "/washing.png",
  },
  {
    src: "/1.svg",
  },
  {
    src: "/2.svg",
  },
  {
    src: "/3.svg",
  },
  {
    src: "/4.svg",
  },
  {
    src: "/5.svg",
  },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;

    const newIndex = isFirstSlide
      ? ImagesForSlider.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === ImagesForSlider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-[393px] h-[330px]  m-auto  relative group">
      <div
        style={{ backgroundImage: `url(${ImagesForSlider[currentIndex].src})` }}
        className="w-full h-full rounded-2xl bg-center bg-no-repeat duration-500"
      ></div>
      {/* left arrow  */}
      <div
        className="flex absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 cursor-pointer w-[24px] h-[24px] rounded-full bg-[#11101033] bg-opacity-20  justify-center items-center"
        onClick={prevSlide}
      >
        <Image
          src="/arrow_back.svg"
          alt="arrow"
          width={12.4}
          height={12.2}
          className=""
        />
      </div>
      {/* right arrow  */}
      <div
        className="flex absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 cursor-pointer w-[24px] h-[24px] rounded-full bg-[#11101033] bg-opacity-20  justify-center items-center"
        onClick={nextSlide}
      >
        <Image
          src="/arrow_forward.svg"
          alt="arrow"
          width={12.4}
          height={12.2}
        />
      </div>
    </div>
  );
};

export default ProductSlider;
