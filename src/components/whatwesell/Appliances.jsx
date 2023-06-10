import Image from "next/image";
import React from "react";

const AppliancesData = [
  {
    logo: "dent",
    title: "Scratch and Dent Appliances",
  },
  {
    logo: "connected_tv",
    title: "Floor Model & Display Appliances",
  },
  {
    logo: "box",
    title: "Open box appliances",
  },
  {
    logo: "stock",
    title: "Overstock appliances",
  },
];

const Appliances = () => {
  return (
    <>
      {/* main container */}
      <div className="bg-[#EDF8F8] w-full lg:h-[576px] lg:py-0 py-8 h-auto flex flex-col justify-center items-center gap-[60px]">
        <h1 id="whatwesell">What We Sell </h1>
        <div className="flex lg:flex-row flex-col gap-[60px]">
          {AppliancesData.map((data, index) => {
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] shadow-md w-[315px] h-[224px] rounded-lg flex flex-col items-center justify-center gap-[16px]"
              >
                <div className="bg-[#FF9B3E] w-[64px] h-[64px] rounded-full flex items-center justify-center">
                  <Image
                    src={`/${data.logo}.svg`}
                    alt="Scratch and Dent Appliances"
                    width={40}
                    height={40}
                  />
                </div>
                <span
                  id="Appliances"
                  className="w-[235px] h-[64px] text-center"
                >
                  {data.title}
                </span>
              </div>
            );
          })}
        </div>
        <h1 id="customers" className="w-full h-auto p-6 text-lg flex justify-center items-center">
        We deliver customers deep discounts by liquidating thousands of appliances from big box retailers right here in Austin, Tx!
        </h1>
      </div>
    </>
  );
};

export default Appliances;
