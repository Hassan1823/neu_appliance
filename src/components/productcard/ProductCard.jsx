import Image from "next/image";
import React from "react";
import ProductSlider from "./ProductSlider";

const cardData = [
  {
    src: "/monetization_on.svg",
    package: "Best Value",
    rating: "3 Stars ",
    starts: 3,
    damage: "Moderate Cosmetic Damage",
    cosmetic: "Moderate",
    button: "Shop 3 Star Products",
  },
  {
    src: "/popular.svg",
    package: "Most Popular",
    rating: "4 Stars",
    starts: 4,
    damage: "Minor Cosmetic Damage",
    cosmetic: "Minor",
    button: "Shop 4 Star Products",
  },
  {
    src: "/premium.svg",
    package: "Premium Condition",
    rating: "5 Stars",
    starts: 5,
    damage: "Very Minor To No Cosmetic Damage",
    cosmetic: "Very Minor- None",
    button: "Shop 5 Star Products",
  },
];

const ProductCard = () => {
  return (
    <div className="w-full flex gap-[10px] justify-center items-center">
      {cardData.map((data, index) => {
        return (
          <div
            key={index}
            className="w-[473.33px] h-[860px] bg-[#FFFFFF] rounded-md"
          >
            {/* offer  button */}
            <button
              id="Productbtn"
              className={`${data.starts === 3 ? 'bg-[#016FD0] w-[144px]' : data.starts === 4 ?'bg-[#22A6AB] w-[166px]' : 'bg-[#EEA83E] w-[219px]'}  h-[36px] flex justify-center items-center gap-[6px] text-center ml-[16px]`}
            >
              <Image
                src={data.src}
                alt="monetization_on"
                width={20}
                height={20}
              />
              <span className="text-[#FFFFFF] font-bold leading-6">
                {data.package}
              </span>
            </button>
            {/* heading */}
            <h1 className="text-[22px] font-bold leading-5 mt-[18px] mx-[97.66px]">
              Cosmetic Rating:{" "}
              <span className="font-medium"> {data.rating}</span>{" "}
            </h1>
            {/* ratin star */}
            <div className="flex gap-1 mt-[10px] justify-center items-center">
              {data.star === 3 ? (
                <>
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                </>
              ) : data.star === 4 ? (
                <>
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                </>
              ) : (
                <>
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/star.svg"
                    alt="rating star"
                    width={28}
                    height={28}
                  />
                </>
              )}
            </div>
            {/* damage */}
            <div className="text-[#22A6AB] text-base font-semibold leading-6 mt-[16px] text-center">
              {data.damage}
            </div>
            {/* functional */}
            <div className="bg-[#2FB956] w-[191px] h-[36px] rounded-full gap-[6px] flex justify-center items-center my-[16px] mx-auto">
              <Image
                src="/check_circle.svg"
                alt="check_circle"
                width={20}
                height={20}
              />
              <span className="text-[16px] font-bold leading-6 text-[#FFFFFF]">
                100% Functional
              </span>
            </div>
            {/* product slider */}
            <ProductSlider />

            {/* damage details */}
            <div className="flex justify-evenly items-center mt-[16px] mx-auto h-[200px]">
              {/* left */}
              <div className="flex flex-col justify-between gap-4">
                <span className="font-semibold text-base leading-5 text-[#111010CC] text-opacity-80 ">
                  Cosmetic Damage
                </span>
                <span className="font-semibold text-base leading-5 text-[#111010CC] text-opacity-80 h-10 mt-2">
                  Discount
                </span>
                <span className="font-normal text-sm leading-4 text-[#111010CC] text-opacity-80">
                  Mechanical Test
                </span>
                <span className="font-normal text-sm leading-4 text-[#111010CC] text-opacity-80">
                  Inspections
                </span>
                <span className="font-normal text-sm leading-4 text-[#111010CC] text-opacity-80">
                  Warranty
                </span>
                <span className="font-normal text-sm leading-4 text-[#111010CC] text-opacity-80">
                  Class
                </span>
              </div>
              {/* right */}

              <div className="flex flex-col justify-between gap-4">
                <span className="font-normal text-base leading-4 text-[#111010A3] text-opacity-65 ">
                  {data.cosmetic}
                </span>
                <span className="flex gap-[10px] h-8">
                  <Image src="/Frame.svg" alt="frame" width={34} height={24} />
                  <span className="font-semibold text-base leading-5 text-[#111010CC] text-opacity-80">
                    Discount
                  </span>
                </span>
                <span className="flex gap-[10px]">
                  <Image
                    src="/check.svg"
                    alt="check"
                    width={13.33}
                    height={13.33}
                  />
                  <span className="font-normal text-sm leading-5 text-[#111010A3] text-opacity-65">
                    100%
                  </span>
                </span>
                <span className="flex gap-[10px]">
                  <Image
                    src="/check.svg"
                    alt="check"
                    width={13.33}
                    height={13.33}
                  />
                  <span className="font-normal text-sm leading-5 text-[#111010A3] text-opacity-65">
                    Passed
                  </span>
                </span>
                <span className="font-normal text-sm leading-5 text-[#111010A3] text-opacity-65">
                  1 Year Warranty
                </span>
                <span className="font-normal text-sm leading-5 text-[#111010A3] text-opacity-65">
                  Open Box / Scratch & Dent
                </span>
              </div>
            </div>
            {/* button */}
            <button
              className="bg-[#FF9B3E] w-[393.33px] h-[48px]
          rounded-md flex gap-[8px] text-[16px] font-semibold leading-6 text-[#FFFFFF] justify-center items-center mt-[16px] mx-auto"
            >
              {data.button}
              <Image
                src="/arrow_forward.svg"
                alt="forward"
                width={15.58}
                height={15.15}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
