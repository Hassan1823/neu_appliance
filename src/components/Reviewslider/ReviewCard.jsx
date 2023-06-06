import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const ReviewCard = ({color}) => {
  return (
    <div style={{backgroundColor:color}} className='flex flex-col shadow-sm px-5 py-3 rounded-xl xl:min-w-[342px] xl:h-[170px] lg:min-w-[320px] min-w-[320px]' >
      <div className='flex mt-2' ><AiFillStar className='text-yellow-300 text-sm' /><AiFillStar className='text-yellow-300 text-sm' /><AiFillStar className='text-yellow-300 text-sm' /></div>   
      <p className='text-sm font-semibold mt-1' >Facilisis sodales sollicitudin mi porttitor tellus. Nunc volutpat...</p>
      <a className='text-sm text-b6 mt-2' >Read More</a>
      <div className='flex items-center' ><h5 className='text-sm mt-2 w-10/12' >John Doe</h5><img src="/google.svg" className='h-5 w-10 mt-4 object-contain' /></div>
    </div>
  )
}

export default ReviewCard