"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menugrid from "./Menugrid";

const Header = () => {
  const [opneMenu, setOpenMenu] = useState(false);
  return (
    <>
      {/* main container */}
      <header className=" relative w-screen h-auto  flex flex-col bg-[#071522] text-[#FFFFFF]">
        {/* logo header */}
        <div className="w-full h-[80px] flex items-center px-[120px]">
          {/* logo */}
          <Image
            src="/logo.svg"
            alt="logo"
            width={135}
            height={40}
            className="object-contain mr-[304px]"
          />

          {/* search bar  */}
          <div className="lg:flex hidden w-[560px] bg-[#FFFFFF] rounded-md  h-1/2 text-[12px] font-normal mr-[133px]">
            <Image
              src="/search.svg"
              alt="search icon"
              width={15}
              height={15}
              className="ml-[18px] mr-[6px]"
            />
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search for appliances..."
              className="text-[#000000]  rounded-md outline-none focus:outline-none "
            />
          </div>
          {/* menu buttons */}
          <div className="xl:flex hidden w-auto h-full justify-center items-center gap-4 text-xs">
            <button className=" flex items-center bg-[#FFFFFF14] bg-opacity-10 w-[78px] h-[40px] gap-2 rounded-md justify-center">
              <Image
                src="/shopping_cart.svg"
                alt="cart"
                width={15}
                height={15}
              />
              Cart
            </button>
            <button className=" flex items-center justify-center bg-[#FFFFFF14] bg-opacity-10 w-[125px] h-[40px] gap-2 rounded-md">
              <Image
                src="/account_circle.svg"
                alt="cart"
                width={15}
                height={15}
              />
              My Account
            </button>
            <button
              className=" flex items-center justify-center bg-[#FFFFFF14] bg-opacity-10 w-[88px] h-[40px] gap-2 rounded-md"
              onClick={() => setOpenMenu(!opneMenu)}
            >
              <Image src="/menu.svg" alt="cart" width={15} height={15} />
              Menu
            </button>
          </div>

          {/* mobile menu */}
          <Image
            src="/menu.svg"
            alt="cart"
            width={15}
            height={15}
            className="sm:mx-14 mx-6 xl:hidden inline object-contain "
          />
          {/* <button
            className="xl:hidden flex items-center justify-center bg-[#FFFFFF14] bg-opacity-10 w-[22%] h-1/2 gap-2 rounded-md"
            onClick={() => setOpenMenu(!opneMenu)}
          >
            Menu
          </button> */}
        </div>
        {/* menu button drop down */}
        {opneMenu && (
          <div
            className={
              "absolute z-30 bg-[#071522] mt-[80px] w-full h-auto lg:flex hidden py-24 justify-evenly items-start"
            }
          >
            {/* how it works */}
            <div className={"flex flex-col gap-6"}>
              <h1 className="text-base font-[600]">How it Works</h1>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                What We Sell
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Rating System{" "}
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Testing Process
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Product Photos
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Delivery
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Warranty & Return
              </Link>
            </div>
            {/* resources */}
            <div className="flex flex-col gap-6">
              <h1 className="text-base font-[600]">Resources</h1>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Appliance Repair
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Product Reviews
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Measuring Guide
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Appliance Tips
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Appliances Blog
              </Link>
            </div>
            {/* how it works */}
            <div className="flex flex-col gap-6">
              <h1 className="text-base font-[600]">How it Works</h1>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Our Story
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Our Outlet Showroom
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Our Companies
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                FAQ
              </Link>
            </div>
            {/* how it works */}
            <div className="flex flex-col gap-6">
              <h1 className="text-base font-[600]">How it Works</h1>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Help Placing an Order Us
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Returns and Exchanges
              </Link>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Contact Us
              </Link>
            </div>
            {/* how it works */}
            <div className="flex flex-col gap-6">
              <h1 className="text-base font-[600]">How it Works</h1>
              <Link
                href="/"
                className="text-xs font-[500] text-[#FFFFFFA3] text-opacity-60"
              >
                Important Information
              </Link>
            </div>
          </div>
        )}
        {/* menu grid */}
        <Menugrid />
      </header>
    </>
  );
};

export default Header;
