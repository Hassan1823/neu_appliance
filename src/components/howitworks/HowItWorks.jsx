import React from "react";
import ProductCard from "../productcard/ProductCard";
import Image from "next/image";

const carData = [
  {
    icon: "/icon1.svg",
    title: "Cosmetic Rating",
    decs: " We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!",
  },
  {
    icon: "/icon2.svg",
    title: "Tested to Manufacturer Specifications",
    decs: ' Our Open Box and Scratch and Dent appliances are thoroughly tested and must pass our 100 point inspection. This ensures every appliance performs 100% to manufacturer specifications, even if they are "Scratch and Dent."',
  },
  {
    icon: "/icon3.svg",
    title: `What you see is what 
        you get! `,
    decs: `Each scratch and dent appliance is unique. Every appliance receives their own 360° photos and video. This allows you to shop from home while seeing exactly where the cosmetic blemishes are (if any!)`,
  },
];
const carData1 = [
  {
    icon: "/icon4.svg",
    title: "Fast Local Delivery and Installation",
    decs: " We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!",
  },
  {
    icon: "/icon5.svg",
    title: "1 Year Neu Shield Warranty",
    decs: "All appliances include a 1 year Neu Shield Warranty. We store your information so no need to save the receipt or the hassle of registering your appliance.",
  },
  {
    icon: "/icon6.svg",
    title: `Free Curbside Returns `,
    decs: `Shop with confidence. Upon delivery, if you decide the appliance isn't for you, we will return it free of charge!
    `,
  },
];

const HowItWorks = () => {
  return (
    <>
      {/* main container */}
      <div className="bg-[#EDF8F8] w-full h-auto flex flex-col justify-center items-center text-center">
        <span id="cosmetics" className="lg:w-[1440px] w-full lg:h-[40px] h-auto mt-[80px] mb-[16px]">
          Our Cosmetic Star Rating System
        </span>
        <span className="lg:w-[1000px] lg:h-[56px] w-full h-auto lg:font-medium font-light lg:text-xl text-base leading-7 text-[#242424] mb-[60px]">
          We rate our scratch and dent appliances by their cosmetic appearance
          (How they look). Appliances with lower cosmetic grades get Deeper
          Discounts! You pick your level of savings!
        </span>

        {/*products card packages  */}
        <ProductCard />

        {/* heading */}
        <h1 className="font-bold text-4xl leading-[44px] text-[#242424] mt-[60px]">
          How it works
        </h1>

        {/* work grid */}

        <div className="gap-[60px] flex lg:flex-row flex-col mt-[60px]">
          {carData.map((carData, index) => {
            return (
              <div
                key={index}
                className="lg:w-[440px] w-[320px] h-[384px] bg-[#FFFFFF] rounded-lg shadow-md flex flex-col justify-evenly items-center text-center"
              >
                <Image src={carData.icon} alt="icons" width={64} height={64} />
                <span className="font-bold text-2xl leading-8 text-[#000000]">
                  {carData.title}
                </span>
                <p className="lg:font-medium font-normal lg:text-[16px] text-[12px] leading-6 lg:w-[360px] w-full h-auto lg:h-[120px] lg:p-0 p-4">
                  {carData.decs}
                </p>
              </div>
            );
          })}
        </div>
        <div className="gap-[60px] flex lg:flex-row flex-col mt-[40px]">
          {carData1.map((carData1, index) => {
            return (
              <div
                key={index}
                className="lg:w-[440px] w-[320px] h-auto lg:h-[336px] bg-[#FFFFFF] rounded-lg shadow-md flex flex-col justify-evenly items-center text-center lg:p-0 p-4 lg:gap-0 gap-4"
              >
                <Image src={carData1.icon} alt="icons" width={64} height={64} />
                <span className="font-bold text-2xl leading-8 text-[#000000]">
                  {carData1.title}
                </span>
                <p className="lg:font-medium font-normal text-[12px] lg:text-[16px] leading-6 lg:w-[360px] lg:h-[120px] w-full h-auto">
                  {carData1.decs}
                </p>
              </div>
            );
          })}
        </div>

        {/* banner */}
        <div className="bg-[url('/banner.svg')] w-full h-[365px] flex justify-center items-center mt-[84px]">
          <span className="lg:w-[936px] w-full lg:h-[118px] h-auto lg:text-[48px] text-[30px] font-bold text-[#FFFFFF] lg:leading-[58px] leading-9">
            {`Austin Loves Our Star Rating System Here's Why`}
          </span>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
