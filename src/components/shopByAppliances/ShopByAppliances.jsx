import Image from "next/image";
import Link from "next/link";
import React from "react";

const appliancesData = [
  {
    src: "/appliances.svg",
    title: "Refrigerators",
  },
  {
    src: "/appliances.svg",
    title: "Washer & Dryers",
  },
  {
    src: "/appliances.svg",
    title: "Ranges",
  },
  {
    src: "/appliances.svg",
    title: "Dishwashers",
  },
  {
    src: "/appliances.svg",
    title: "Microwaves",
  },
  {
    src: "/appliances.svg",
    title: "All Appliances",
  },
];

const ShopByAppliances = () => {
  return (
    <div className="w-full h-[1400px] bg-[#22A6AB14] bg-opacity-10 pt-[120px]">
      <h1 className="text-4xl leading-[44px] font-bold text-[#242424] text-center mb-[40px]">
        Shop By Appliance Type
      </h1>

      {/* appliances grid */}
      <div className="grid grid-cols-3 gap-[40px] w-full h-auto px-[120px] justify-center items-center">
        {/* appliances card */}
        {appliancesData?.map((data, index) => {
          return (
            <div
              key={index}
              className="w-[403px] h-auto bg-transparent flex flex-col justify-center items-start gap-[16px]"
            >
              <Image
                src={data.src}
                alt="appliances"
                width={453}
                height={400}
                className="object-contain rounded-lg shadow-md"
              />
              <span className="text-[#111010] text-xl font-bold leading-7">
                {data.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* button */}
      <button className="w-[220px] h-[48px] rounded-md bg-transparent border-[#22A6AB] border-2 flex justify-center items-center gap-[8px] text-[#22A6AB] text-base font-semibold leading-6 mx-auto mt-[60px] mb-[120px]">
        <Link href="/">View All Categories</Link>
        <Image
          src="/arrow_forwardblue.svg"
          alt="arrow"
          width={15.58}
          height={15.15}
        />
      </button>
    </div>
  );
};

export default ShopByAppliances;
