import React from 'react'

const Cards = () => {
  return (
    <div className='w-full' >
        <div className='flex md:flex-row flex-col m-auto justify-between items-center container mx-auto gap-2 py-10'>
             <div className='flex flex-col bg-white rounded-2xl shadow-md p-5 md:px-24 px-5 text-center hover:shadow-2xl transition '>
              <h1 className=' font-extrabold md:text-[42px] text-[30px]'>Outward clothes <br /> promise at gravity.</h1>
              <p className='font-medium text-[16px] md:leading-[30px] leading-[20px] text-[#64607D]'>End-to-end payments and financial management in a single <br /> solution. Meet the right platform to help realize.</p>
              <button className='bg-primary p-3 text-white w-[30%] text-xs m-auto rounded-md mt-5'>Read More</button>
             </div>
             <div className='flex flex-col bg-white rounded-2xl shadow-md p-5 md:px-24 px-5 text-center hover:shadow-2xl transition '>
             <h1 className=' font-extrabold md:text-[42px] text-[30px]'>Sufficient particular <br /> impossible.</h1>
              <p className=' font-medium text-[16px] md:leading-[30px] leading-[20px] text-[#64607D]'>End-to-end payments and financial management in a single <br /> solution. Meet the right platform to help realize.</p>
              <button className='bg-primary p-3 text-white w-[30%] text-xs m-auto rounded-md mt-5'>Read More</button>
             </div>
        </div>
    </div>
  )
}

export default Cards