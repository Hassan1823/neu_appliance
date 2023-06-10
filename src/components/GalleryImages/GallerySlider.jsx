import React, { useState,useEffect } from 'react'
import { BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';


const GallerySlider = ({setState,state}) => {
 useEffect(() => {
   let box = document.getElementById('id6');
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
    <div className='relative my-8 mx-5' >
     <button onClick={btnprev} className='absolute top-0 -right-5 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowRightShort className='text-xl'/></div></button>
     <button onClick={btnnext} className='absolute top-0 -left-5 z-40 h-full'><div className='hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group'><BsArrowLeftShort className='text-xl'/></div></button>
     <div id="id6" className='flex lg:overflow-x-hidden overflow-x-scroll xl:space-x-[9px] space-x-4 lg:space-x-3 scroll-smooth' >
      <img onClick={()=>setState('g8.png')} src="./g8.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 rounded-2xl ${state === 'g2.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
      <img onClick={()=>setState('g3.png')} src="./g3.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 ${state === 'g3.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
      <img onClick={()=>setState('g4.png')} src="./g4.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 ${state === 'g4.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
      <img onClick={()=>setState('g5.png')} src="./g5.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 ${state === 'g5.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
      <img onClick={()=>setState('g6.png')} src="./g6.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 ${state === 'g6.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
      <img onClick={()=>setState('g7.png')} src="./g7.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 ${state === 'g7.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
      <img onClick={()=>setState('g2.png')} src="./g2.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 ${state === 'g8.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
      <img onClick={()=>setState('g3.png')} src="./g3.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 ${state === 'g8.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
      <img onClick={()=>setState('g5.png')} src="./g5.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 ${state === 'g8.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
      <img onClick={()=>setState('g7.png')} src="./g7.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 ${state === 'g8.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
      <img onClick={()=>setState('sitl.png')} src="./g8.png" className={`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 ${state === 'g8.png' ? 'xl:border-4 lg:border-2 border-blue-500 rounded-xl' : 'border-none'}  `} />
     </div>
    </div>

    </>
  )
}

export default GallerySlider