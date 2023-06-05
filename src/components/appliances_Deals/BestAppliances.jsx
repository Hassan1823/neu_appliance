import React from "react";
import { BsPiggyBank, BsArrowRightShort } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
// import D3Slider from "./D3Slider";

const D3CardSection = () => {
  return (
    <div className="lg:grid flex flex-col grid-cols-12 items-center py-20 xl:space-x-28 space-x-10 xl:px-[120px] lg:px-[60px]  ">
      <div className="col-start-1 col-end-6 flex flex-col space-y-5">
        <div className="flex space-x-2">
          <Image src="/savings.svg" alt="saving" width={20} height={19} />
          <p className="text-sm">
            We provide our Austin neighbors the best savings on floor models ,
            returns and scratch and dent appliances.{" "}
          </p>
        </div>
        <div className="flex space-x-2">
          <Image
            src="/check_circleblack.svg"
            alt="saving"
            width={20}
            height={19}
          />
          <p className="text-sm">
            Every appliance we sell is tested with our 100-point inspection
            process. We ensure every appliance functions the way it is supposed
            to and provide you the best discounts possible.
          </p>
        </div>
        <div className="flex space-x-2">
          <Image src="/home_pin.svg" alt="saving" width={20} height={19} />
          <p className="text-sm">
            Discover why our Austin neighbors trust us to provide great
            appliances at better savings. Lets find the perfect appliance for
            your needs at an unbeatable price by clicking below.
          </p>
        </div>
        <div className="flex lg:justify-start justify-center border-[#22A6AB] border-2 w-[217px] h-[48px] rounded-lg text-[#22A6AB]">
          <a className="flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold">
            <span className="text-sm">Get Our Best Deals</span>
            <BsArrowRightShort className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="col-start-7 col-end-13 lg:mt-0 mt-10 relative flex justify-center items-center w-fit">
        <img src="/Product Card 1.svg" className="lg:w-56 lg:h-96 w-46 h-36" />
        <img
          src="/Product Card 2.svg"
          className="absolute -top-5 lg:w-72 lg:h-96 w-46 h-36"
        />
        <img src="/Product Card 3.svg" className="lg:w-56 lg:h-96 w-46 h-36" />
      </div>
    </div>
  );
};

export default D3CardSection;