"use client";
import React, { useState, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const StayLoopSlider = ({ state, setState }) => {
  useEffect(() => {
    let box = document.getElementById("id3");
    setBox(box);
  }, []);

  const [Box, setBox] = useState();
  const btnprev = () => {
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft - width;
  };
  const btnnext = () => {
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft + width;
  };

  return (
    <>
      <div className="relative my-8">
        <button
          onClick={btnprev}
          className="absolute top-0 -right-5 z-40 h-full"
        >
          <div className="hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group">
            <BsArrowRightShort className="text-xl" />
          </div>
        </button>
        <button
          onClick={btnnext}
          className="absolute top-0 -left-5 z-40 h-full"
        >
          <div className="hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group">
            <BsArrowLeftShort className="text-xl" />
          </div>
        </button>
        <div
          id="id3"
          className="flex lg:overflow-x-hidden overflow-x-scroll space-x-3 scroll-smooth"
        >
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/WQWVW4DUmZ0")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/WQWVW4DUmZ0"
            title="5 Best Refrigerators 2023 | Top French Door Refrigerator 2023"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/KOmSLwIE7MU")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/KOmSLwIE7MU"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/WQWVW4DUmZ0")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/WQWVW4DUmZ0"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/WQWVW4DUmZ0")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/WQWVW4DUmZ0"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/WQWVW4DUmZ0")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/WQWVW4DUmZ0"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/KOmSLwIE7MU")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/KOmSLwIE7MU"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/WQWVW4DUmZ0")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/WQWVW4DUmZ0"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/WQWVW4DUmZ0")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/WQWVW4DUmZ0"
            title="5 Best Refrigerators 2023 | Top French Door Refrigerator 2023"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/KOmSLwIE7MU")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/KOmSLwIE7MU"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/WQWVW4DUmZ0")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/WQWVW4DUmZ0"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/WQWVW4DUmZ0")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/WQWVW4DUmZ0"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/WQWVW4DUmZ0")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/WQWVW4DUmZ0"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/KOmSLwIE7MU")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/KOmSLwIE7MU"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <iframe
            onClick={() =>
              setState("https://www.youtube.com/embed/WQWVW4DUmZ0")
            }
            className="col-start-1 col-end-6 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 "
            src="https://www.youtube.com/embed/WQWVW4DUmZ0"
            title="Whirlpool Neo Fresh  Refrigerator"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default StayLoopSlider;
