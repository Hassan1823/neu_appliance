'use client'
import React, { useState,useEffect } from 'react'
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import ReviewExCard from './ReviewExCard';

const ReviewExSlider = ({color}) => {
 useEffect(() => {
   let box = document.getElementById('id10');
   setBox(box);
}, []);
  
  const [Box,setBox] = useState();
  const btnprev = () => {
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft - width;
  }
  const btnnext = () => {
    let width = Box.clientWidth;
    Box.scrollLeft = Box.scrollLeft + width;
  }

  return (
    <>
    <div className='relative my-8 xl:mx-[40px] px-4 ' >
     <button onClick={btnprev} className='absolute top-0 -right-8 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowRightShort className='text-xl'/></div></button>
     <button onClick={btnnext} className='absolute top-0 -left-10 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowLeftShort className='text-xl'/></div></button>
     <div id="id10" className='flex lg:overflow-x-hidden overflow-x-scroll space-x-5 scroll-smooth' >
        <ReviewExCard color={color} />
        <ReviewExCard color={color} />
        <ReviewExCard color={color} />
        <ReviewExCard color={color} />
        <ReviewExCard color={color} />
     </div>
    </div>

    </>
  )
}

export default ReviewExSlider