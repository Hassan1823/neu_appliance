'use client'

import React,{useState} from 'react'
import StayLoopSlider from './StayLoopSlider'
import { BsArrowRightShort } from 'react-icons/bs'

const LoopSection = () => {

  const [video,setVideo] = useState('https://www.youtube.com/embed/OzCAGd4YVbI');

  return (
    <div className='lg:flex hidden flex-col mt-10' >
    <div className='flex flex-col justify-center space-y-2 items-center w-full' >
     <h4 className='lg:text-4xl xl:text-4xl text-2xl font-bold text-center' >Stay In The Loop</h4>
     <p className='xl:text-xl lg:text-xl text-sm font-medium text-center lg:w-7/12 xl:w-7/12 w-11/12' >Keep up with our videos about appliances we sell, New stock at our outlet store, product reviews,  sales and much more!</p>
    </div>
    
    <div className='mb-10 flex flex-col justify-center items-center' >
    <iframe className=' mx-auto col-start-1 col-end-6 w-[1440px] h-[565px] rounded-2xl ' src={video} title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='mx-auto'>
        <StayLoopSlider state={video} setState={setVideo} />
      </div>
      <div className='flex justify-center w-[187px] h-[48px] rounded-md text-[#22A6AB mx-auto' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >View All Videos</span><BsArrowRightShort className='text-2xl' /></a></div>
    </div>

   </div>
  )
}

export default LoopSection