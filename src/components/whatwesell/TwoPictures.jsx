import React from "react";

const TwoPictures = () => {
  return (
    <>
      {/* main Container */}
      <div className="w-full h-[420px] flex">
        {/* ?left */}
        <div className="w-1/2 h-full bg-[url('/left.svg')]">
          <div className="bg-[#22A6AB] w-[593px] h-[90px] text-center rounded-md  ml-[178px] mt-[99px]">
            <span id="left">
              Thousands of Scratch and Dent and Open Box Appliances In Stock{" "}
            </span>
          </div>
        </div>
        {/* ?right */}
        <div className="w-1/2 h-full bg-[url('/right.svg')]">
          <div className="bg-[#FF7A00] w-[556px] h-[90px] text-center rounded-md  ml-[178px] mt-[99px]">
            <span id="right">
              Live Website - Stock Updates in Real-Time
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoPictures;
