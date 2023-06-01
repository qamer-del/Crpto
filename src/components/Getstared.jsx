 import React from 'react'
 import { getimg } from '../assets'

const Getstared = () => {
  return (
    <  div className=' w-full  container mx-auto  py-10 relative text-white overflow-hidden bg-primary p-10 mr-0 '>
        <div className='   '>
           <h1 className=' md:text-[45px] text-[30px] font-extrabold md:leading-[50px] leading-[30px]'>Yet preference connection unpleasant <br /> yet melancholy but end appearance</h1>
           <button className='bg-btn md:px-5 px-3 py-2 absolute right-0 top-16 ' >Get Started</button>
           <div className='flex md:flex-row flex-col items-center justify-between py-10'>
              <div className=' flex flex-col gap-5 '>
                   <div className='flex flex-row gap-3 justify-center items-center'>
                          <div>
                          <h1 className=' flex items-center justify-center text-4xl bg-rounded rounded-full md:w-[80px] md:h-[80px] w-[50px] h-[50px]'>1</h1> 
                          </div>
                          <div className='w-full'>
                            <h1 className=' font-bold md:text-[26px] text-[17px]  '>First Working Process</h1>
                            <p className=' font-medium md:text-[18px]  text-[10px] text-[10px]text-[#A0B3E9]'>Blessing it ladyship on sensible <br /> judgment settling outweigh.</p>
                          </div>
                   </div>
                   <div className='flex flex-row gap-3 justify-center items-center'>
                          <div>
                          <h1 className=' flex items-center justify-center text-4xl bg-rounded rounded-full md:w-[80px] md:h-[80px] w-[50px] h-[50px]'>2</h1> 
                          </div>
                          <div className='w-full'>
                            <h1 className=' font-bold md:text-[26px] text-[17px]'>Dedicated Team</h1>
                            <p className=' font-medium md:text-[18px]  text-[10px] text-[10px]text-[#A0B3E9]'>Warmly little before cousin sussex <br /> entire men set.</p>
                          </div>
                   </div>
                   <div className='flex flex-row gap-3 justify-center items-center'>
                          <div>
                          <h1 className=' flex items-center justify-center text-4xl bg-rounded rounded-full md:w-[80px] md:h-[80px] w-[50px] h-[50px]'>3</h1> 
                          </div>
                          <div className='w-full'>
                            <h1 className=' font-bold md:text-[26px] text-[17px]'>24/7 Hours Support</h1>
                            <p className=' font-medium md:text-[18px]  text-[10px] text-[10px]text-[#A0B3E9]'>And excellence partiality estimating <br /> terminated day everything.</p>
                          </div>
                   </div>
              </div>
              <div className=' md:mr-[-85px] mr-0   '>
                <img src={getimg} alt="" />
              </div>
           </div>
        </div>
         
    </div>
  )
}

export default Getstared