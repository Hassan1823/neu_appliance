import Image from "next/image";
import React from "react";

const HeroContainer = () => {
  return (
    <>
      {/* main container */}
      <div className="px-[120px] w-full h-[664px] bg-[#FAFAFA] flex gap-[100px] items-center">
        {/* left text */}
        <div className=" w-auto h-[664px] flex flex-col justify-center items-start">
          <span
            id="Montserrat"
            className=" text-[60px] font-extrabold text-[#071822] w-[640px] h-[198px]"
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
        <div className="flex justify-start items-start relative w-auto h-[664px]">
          <Image
            src="/Frame 7045.svg"
            alt="video pic"
            width={640}
            height={504}
            className="m-auto ml-14"
          />
          <Image
            src="/Group 3.svg"
            alt="start"
            width={152.71}
            height={152.71}
            className=" absolute"
          />
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
