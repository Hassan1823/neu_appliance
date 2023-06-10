import React from 'react'
import ReviewExSlider from './ReviewExSlider'

const SatisfiedSection = ({title}) => {
  return (
    <div className='flex flex-col justify-center xl:px-16 px-4 lg:px-20 pt-16 pb-10' >
    <h4 className='xl:text-3xl text-2xl font-bold text-center pb-7' >Join Thousands of our Satisfied Customers.</h4>
     <ReviewExSlider />
   </div>
  )
}

export default SatisfiedSection