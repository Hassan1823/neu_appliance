import Image from "next/image";
import React from "react";

const HeroContainer = () => {
  return (
    <>
      {/* main container */}
      <div className="px-[120px] w-full lg:h-[664px] h-auto bg-[#FAFAFA] flex lg:flex-row flex-col lg:gap-[100px] gap-[150px] items-center">
        {/* left text */}
        <div className=" w-auto h-[664px] lg:h-auto flex flex-col justify-center items-start lg:p-0 p-1">
          <span
            id="Montserrat"
            className="text-6xl font-extrabold text-[#071822] w-full h-auto lg:w-[640px] lg:h-[198px]"
          >
            Austin’s Best Deals For Scratch & Dent Appliances
          </span>
          <button className="bg-[#FF9B3E] w-[271px] h-[56px] flex gap-[11px] text-[18px] font-bold rounded-md items-center justify-center text-[#FFFFFF] mt-[30px] leading-4">
            <Image
              src="/shopping_cart.svg"
              alt="cart"
              width={24}
              height={24}
              className="text-[#D9D9D9]"
            />
            Discover The Savings
          </button>
        </div>
        {/* right video */}
        <div className="lg:flex hidden lg:justify-start lg:items-start justify-center items-center relative w-full h-auto lg:w-auto lg:h-[664px] lg:p-0 p-5">
          <Image
            src="/Frame 7045.svg"
            alt="video pic"
            width={640}
            height={504}
            className="m-auto lg:ml-14 ml-0"
          />
          <Image
            src="/Group 3.svg"
            alt="start"
            width={152.71}
            height={152.71}
            className="absolute -mt-60 -ml-60 lg:-mt-0 lg:-ml-0"
          />
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
