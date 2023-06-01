import React from 'react'
import { arrow, blo1, blo2, blo3, blo4 } from '../assets'
const Blogs = () => {
  return (
    < div 
    className='w-full'>
      
         <div className='  container mx-auto flex flex-col'>
          <div className='flex flex-row justify-between my-10 '>
              <div>
                <p className=' font-bold text-[16px]'>Best Practices</p>
                <p className=' font-bold md:text-[29px] md:leading-[36px] text-[18px] leading-[20px] md:my-5 my-1'>In design active temper be uneasy. <br /> Thirty for remove plenty regard.</p>
                <button className='md:my-10 my-1 font-semibold text-[16px]' >read more</button><img src={arrow} alt="" className=' inline ml-2' />
              </div>
              <div>
                 <img src={blo4}  alt="" className='w-full' />
              </div>
          </div>
          <div className=' flex md:flex-row flex-col gap-2 '>
             <div className='w-full'>
                <p className=' font-bold text-[16px]'>Best Practices</p>
                <p className=' font-bold text-[29px] leading-[36px] my-5'>Partiality on or <br /> continuing particular <br /> principles as. </p>
                <img src={blo3} alt="" />
              </div>
              <div className='w-full'>
                <p className=' font-bold text-[16px]'>Best Practices</p>
                <p className=' font-bold text-[29px] leading-[36px] my-9'>Village did removed <br /> enjoyed explain</p>
                <img src={blo2} alt="" />
              </div>
              <div className='w-full'>
                <p className=' font-bold text-[16px]'>Best Practices</p>
                <p className=' font-bold text-[29px] leading-[36px] my-5'>Wise busy past both <br /> park when an ye no. <br /> Nay likely her length.</p>
                <img src={blo1} alt="" />
              </div>
          </div>
          <div>

          </div>
          </div>  
    </div>
  )
}

export default Blogs