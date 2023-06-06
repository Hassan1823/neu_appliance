'use client'

import React,{useState} from 'react'
import StayLoopSlider from './StayLoopSlider'
import { BsArrowRightShort } from 'react-icons/bs'

const LoopSection = () => {

  const [video,setVideo] = useState('https://www.youtube.com/embed/OzCAGd4YVbI');

  return (
    <div className='flex flex-col mt-10 xl:px-[120px] lg:px-[60px] px-5' >
    <div className='flex flex-col justify-center space-y-2 items-center w-full' >
     <h4 className='lg:text-4xl xl:text-4xl text-2xl font-bold text-center' >Stay In The Loop</h4>
     <p className='xl:text-xl lg:text-xl text-sm font-medium text-center lg:w-7/12 xl:w-7/12 w-11/12' >Keep up with our videos about appliances we sell, New stock at our outlet store, product reviews,  sales and much more!</p>
    </div>
    
    <div className=' py-16 lg:mb-0 mb-10' >
    <iframe className='col-start-1 col-end-6 w-full rounded-2xl xl:h-[651px] xl:w-[1440px] lg:w-[1100px] h-72 lg:h-[430px]' src={video} title="Introducing our Next Generation of High End Kitchen Appliances | Miele" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div>
        <StayLoopSlider state={video} setState={setVideo} />
      </div>
      <div className='flex justify-center w-[187px] h-[48px] rounded-md text-[#22A6AB] border-[#22A6AB] border mx-auto' ><a className='flex items-center border-[1px] border-b3 w-fit px-4 py-1 rounded-md text-b3 font-semibold' ><span className='text-sm' >View All Videos</span><BsArrowRightShort className='text-2xl' /></a></div>
    </div>

   </div>
  )
}

export default LoopSection