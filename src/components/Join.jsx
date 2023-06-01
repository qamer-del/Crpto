import React from 'react'
import { arrow } from '../assets'

const Join = () => {
  return (
    <div
     className='w-full  bg-[#121313] py-5 mt-5 text-white'>
         <div className='flex flex-col justify-center items-center container mx-auto'>
            <h1 className='text-center font-medium md:text-[56px] md:leading-[70px] text-[30px] leading-[50px]'>Join millions of <br /> creative people with AR Shakir</h1>
            <button className=' bg-btn text-[#121313] text-[14px] font-extrabold p-3 md:w-[20%] w-50px rounded-md my-10'>Join The Waitlist <img src={arrow} className=' inline-block ml-2' /> </button>
         </div>
    </ div>
  )
}

export default Join