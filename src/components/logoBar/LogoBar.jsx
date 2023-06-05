import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
const logoSrc = [
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
  {
    src: "/6.svg",
  },
  {
    src: "/7.svg",
  },
  {
    src: "/8.svg",
  },
  {
    src: "/9.svg",
  },
  {
    src: "/10.svg",
  },
];

const LogoBar = () => {
  return (
    <>
      {/* main container */}
      <div className="h-[132px] w-full bg-[#FFFFFF] flex flex-col border items-center justify-center gap-1">
        {/* Brands We Sell */}
        <div
          className="w-full h-[28px] text-[#242424] flex justify-center items-center"
          id="brands"
        >
          <span className="text-[#242424]">BRANDS WE SELL</span>
        </div>
        {/* <div className="flex gap-1">
          {logoSrc.map((logo, index) => {
            return (
              <Image
                key={index}
                src={logo.src}
                alt="logo"
                width={161}
                height={56}
                className="object-contain"
              />
            );
          })}
        </div> */}
        <Marquee velocity={12}>
          {logoSrc.map((logo, index) => {
            return (
              <Image
                key={index}
                src={logo.src}
                alt="logo"
                width={161}
                height={56}
                className="object-contain"
              />
            );
          })}
        </Marquee>
      </div>
    </>
  );
};

export default LogoBar;
