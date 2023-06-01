import React from 'react'
import { fram2, fram3, frame } from '../assets'
const Featchertow = () => {
  return (
    < div 
    id='ft' className="w-full container mx-auto ">
        <div className="  p-10 mt-5 rounded-lg border-[2px] w-full border-[#DEE1E6] shadow-lg  m-auto h-full flex  md:flex-row flex-col md:gap-2 gap-5 md:items-center items-center justify-between    ">
          <div>
            <h1  className=' font-extrabold text-[34ox]'>Germany-based <br /> & GDPR Compliant</h1>
          </div>
          <div className='flex flex-row gap-2 justify-center items-center  '>
            <img src={frame} alt="" className='bg-[#EBECE8] p-1  rounded-md w-[50px]' />
             <h3 className='text-[13px]'>Data does not <br /> leave our servers</h3>
          </div>
          <div className='flex flex-row gap-2 justify-center items-center'>
          <img src={fram2} alt="" className='bg-[#EBECE8] p-1 rounded-md w-[50px]' />
          <h3 className='text-[13px]'>Own <br /> infrastructure</h3>
          </div>
          <div className='flex flex-row gap-2 justify-center items-center'>
          <img src={fram3} alt="" className='bg-[#EBECE8] p-1 rounded-md w-[50px]' />
          <h3 className='text-[13px]'>Most renowed <br /> data centers</h3>
          </div>
        </div>
    </ div>
  )
}

export default Featchertow