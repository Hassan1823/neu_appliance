import React from 'react'
import {AiOutlineSearch,AiOutlineCheckCircle} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'

const MapForm = ({zip,setZip,Submit,success,error}) => {

  return (
      <div className='absolute xl:top-[150px] xl:left-32 lg:top-28 lg:left-20 lg:flex hidden xl:h-[543px] xl:w-[512px] lg:h-[420px] lg:w-[350px] h-fit py-10  w-[380px] rounded-2xl bg-white bg-opacity-30 backdrop-blur-lg  shadow-2xl z-30 ' >
      <div className='flex flex-col  justify-center xl:px-20 lg:px-10 xl:space-y-5 space-y-2' >
       <h4 className='font-extrabold xl:text-2xl text-xl' >Delivery & Installation</h4>
       <p className='lg:text-sm xl:text-[16px] font-medium' >We make getting your appliance delivered and installed easy! We offer delivery and installation services to the greater Austin and surrounding areas! Input your Zipcode to see if we offer delivery and installation services in your area! </p>
       <div className='flex flex-col space-y-1 bg-b7 px-4 py-4 rounded-lg' >
        <h4 className='text-white text-sm' >Check Your Zip Code</h4>
        <div className='flex items-center bg-white rounded-sm py-1 px-2 space-x-2'><AiOutlineSearch className='text-gray-400' /><input className='text-xs outline-none' value={zip} onChange={e => setZip(e.target.value)} placeholder='Enter ZIP Code' /></div>
       </div>
        <div className='flex justify-center' ><a onClick={Submit} className='flex items-center cursor-pointer bg-b3 w-full justify-center px-4 py-2 rounded-md text-white font-semibold' ><span className='lg:text-sm xl:text-[16px]' >Get Our Best Deals</span><BsArrowRightShort className='text-2xl' /></a></div>
        <div className={` ${success ?'flex':'hidden'} justify-center`} ><a className='flex items-center cursor-pointer bg-b12 w-full px-4 py-2 justify-center space-x-2 rounded-2xl text-white font-semibold' ><AiOutlineCheckCircle className='text-sm' /><span className='text-xs' >Delivery Available</span></a></div>
        <div className={` ${error ? 'flex':'hidden'} justify-center`} ><a className='flex items-center cursor-pointer bg-red-500 w-max px-4 py-2 justify-center space-x-2 rounded-2xl text-white font-semibold' ><AiOutlineCheckCircle className='text-sm' /><span className='text-xs' >Delivery Not Available - Pickup Only</span></a></div>
      </div>
  </div>      
  )
}

export default MapForm