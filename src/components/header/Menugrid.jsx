"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menugrid = () => {
  const [openDeals, setOpenDeals] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [openBrands, setOpenBrands] = useState(false);
  return (
    <>
      {/* main container */}
      <header className="xl:flex justify-between hidden w-full h-12 bg-[#FFFFFF14] bg-opacity-10 px-[120px]">
        {/* drop dowms */}
        <div className="flex items-center gap-[21px] -ml-8">
          {/* deal */}
          <div className="relative w-[137px] ">
            <span
              className="flex justify-center items-center gap-1 text-xs font-normal text-[#FFFFFFCC] text-opacity-80"
              onClick={() => setOpenDeals(!openDeals)}
            >
              Deals
              <Image
                src="/expand_more.svg"
                alt="expand"
                width={8}
                height={5}
                className="object-contain"
              />
            </span>
            {openDeals && (
              <div className="mt-4 absolute z-20 bg-[#FFFFFF] w-full h-[156px] text-[#000000A3] text-opacity-65 font-medium text-[11px] flex flex-col justify-evenly items-center shadow-md rounded-sm ml-6">
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Recent Arrivals
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  5 Star Products
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  4 Star Products
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  3 Star Products
                </Link>
              </div>
            )}
          </div>

          {/* Shop Now */}
          <div className="relative w-[125px] ">
            <span className="flex justify-center items-center gap-1 text-xs font-normal text-[#FFFFFFCC] text-opacity-80">
              Shop Now
            </span>
          </div>

          {/* Products */}
          <div className="relative w-[142px] ">
            <span
              className="flex justify-center items-center gap-1 text-xs font-normal text-[#FFFFFFCC] text-opacity-80"
              onClick={() => setOpenProducts(!openProducts)}
            >
              Products
              <Image
                src="/expand_more.svg"
                alt="expand"
                width={8}
                height={5}
                className="object-contain"
              />
            </span>
            {openProducts && (
              <div className="mt-4 absolute z-20 bg-[#FFFFFF] w-full h-[230px] text-[#000000A3] text-opacity-80 font-semibold text-[11px] flex flex-col justify-evenly items-center shadow-md rounded-sm">
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Refrigerators
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Washer & Dryers
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Ranges
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Dishwashers
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Microwaves
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  View All Categories
                </Link>
              </div>
            )}
          </div>

          {/* popular Brands */}
          <div className="relative w-[156px] ">
            <span
              className="flex justify-center items-center gap-1 text-xs font-normal text-[#FFFFFFCC] text-opacity-80"
              onClick={() => setOpenBrands(!openBrands)}
            >
              Popular Brands
              <Image
                src="/expand_more.svg"
                alt="expand"
                width={8}
                height={5}
                className="object-contain"
              />
            </span>
            {openBrands && (
              <div className="mt-4 absolute z-20 bg-[#FFFFFF] w-full h-[430px] text-[#000000A3] text-opacity-80 font-medium text-[11px] flex flex-col justify-evenly items-center shadow-md rounded-sm">
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Amana
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Maytag
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Frigidaire
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Haier
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Hisense
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Kenmore
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  LG
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  KitchenAid
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Samsung
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Whirlpool
                </Link>
                <Link href="/" className="hover:bg-[#F3F4F5] py-2 pl-2 w-[90%]">
                  Midea
                </Link>
              </div>
            )}
          </div>

          {/* financing */}
          <div className="relative w-[125px] ">
            <span className="flex justify-center items-center gap-1 text-xs font-normal text-[#FFFFFFCC] text-opacity-80">
              Financing
            </span>
          </div>
        </div>
        {/* contact details */}
        <div className=" flex gap-[42px]">
          {/* phone number */}
          <span className="flex justify-center items-center gap-2 text-xs font-normal text-[#F8D357]">
            <Image
              src="/call.svg"
              alt="expand"
              width={12}
              height={12}
              className="object-contain"
            />
            (512) 992-2714
          </span>
          {/* need help */}
          <span className="flex justify-center items-center gap-2 text-xs font-normal text-[#FFFFFFCC] text-opacity-80">
            <Image
              src="/headset_mic.svg"
              alt="expand"
              width={12}
              height={14}
              className="object-contain"
            />
            Need Help?
          </span>
        </div>
      </header>
    </>
  );
};

export default Menugrid;
