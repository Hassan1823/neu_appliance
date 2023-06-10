import React from 'react'
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai'

const MobMapForm = ({zip,setZip,Submit}) => {
  return (
    <div className=' absolute z-30 lg:hidden flex justify-center left-0 bottom-5 w-full' >
    <div className='flex flex-col space-y-1 bg-b7 px-4 py-4 rounded-lg w-10/12' >
       <h4 className='text-white text-sm' >Check Your Zip Code</h4>
       <div className='flex items-center space-x-3 w-full' > <div className='flex items-center bg-white rounded-sm py-1 px-2 space-x-2 w-full'><AiOutlineSearch className='text-gray-400' /><input value={zip} onChange={e => setZip(e.target.value)} className='text-xs w-full outline-none' placeholder='Enter ZIP Code' /></div><span onClick={Submit} className='flex items-center justify-center text-white bg-b3 h-full px-1 rounded-sm' ><AiOutlineArrowRight/></span></div>
      </div>
    </div>
  )
}

export default MobMapForm