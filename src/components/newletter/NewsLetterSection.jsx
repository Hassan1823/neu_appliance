import React from 'react'
import { Checkbox } from '@material-tailwind/react'

const NewsLetterSection = () => {
  return (
    <div id="news" className='flex justify-center items-center h-auto py-16 px-[8.33%]' >
      <div id="news-grid" className='lg:grid grid-cols-12 flex flex-col justify-center items-center py-5 bg-b4 w-full lg:h-72 xl:h-96 h-80 rounded-lg' >
     <div className='col-start-2 col-end-6 flex flex-col items-center lg:space-y-5 xl:space-y-5 space-y-2 justify-center' >
      <a className='bg-b3 px-7 py-2 text-xs xl:text-sm w-fit rounded-3xl text-white' >STAY UPDATED</a>
      <h4 className='lg:text-4xl text-xl xl:text-[56px] font-bold' >Subscribe!</h4>
      <p className='font-normal xl:text-[1rem] lg:text-sm text-xs text-center lg:w-72' >Get updates on exclusive discounts, experiences and more.</p>
     </div>
     <div className='col-start-7 col-end-12 flex flex-col space-y-2' >
      <h4 className='font-bold text-sm' >Email</h4>
      <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-2 space-x-5 items-center' ><input type="email" className='text-xs lg:py-3 xl:py-3 py-2 px-2 rounded-md w-72' placeholder='Enter Your Email!' /><a className='bg-b3 px-7 py-3 text-xs font-bold rounded-md w-max text-white' >Get Updates</a></div>
      <div className='flex items-center space-x-3 py-2' ><Checkbox color='deep-orange'  checked ripple={false} /><span className='text-sm' >Yes, sign me up!</span></div>
      <p className='text-xs xl:w-[350px] w-[280px]' >Sign up above to get updates delivered directly to your inbox. See our <b>Privacy Policy.</b></p>
     </div> 
    </div>
   </div>
  )
}

export default NewsLetterSection