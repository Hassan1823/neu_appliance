import Image from "next/image";
import React from "react";

const HeroContainer = () => {
  return (
    <>
      {/* main container */}
      <div className="w-full h-[664px] bg-[#FAFAFA] flex gap-[100px] items-center">
        {/* left text */}
        <div className="ml-[120px] w-auto h-[664px] border-2 flex flex-col justify-center items-start">
          <span className=" text-[60px] font-extrabold text-[#071822] w-[640px] h-[198px]">
            Austin’s Best Deals For Scratch & Dent Appliances
          </span>
          <button className="bg-[#FF9B3E] w-[271px] h-[56px] flex gap-[11px] text-[18px] font-bold rounded-md items-center justify-center text-[#FFFFFF] mt-[90px] leading-4">
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
        <div className="mr-[120px]"></div>
        {/* right video */}
      </div>
    </>
  );
};

export default HeroContainer;
