import React from 'react'
import { girl } from '../assets'
import { motion } from 'framer-motion'
const Fetcher = () => {
  return (
    <motion.div
    initial={{ opacity: 0 ,y:'-50%' }}
    whileInView={{ opacity: 1 , y:0 }}
    transition={{duration:0.9}}
   
    id='hero' className="w-full flex  justify-between items-center container mx-auto ">
    <div className="  flex mt-10 md:flex-row flex-col items-cenetr justify-between px-2  ">
        <div className=' flex items-start justify-start'>
          <img src={girl} alt="gitl" />  
        </div>
        <div >
          <p className='text-primary text-lg font-extrabold mt-16 w-full'>Our Feature</p>
          <h1 className='md:text-[50px] text-[30px] font-bold md:leading-[56px] leading-[40px] pb-3'>  All of your portfolios are <br /> linked to your AR Shakiraccount</h1>
          <p className=' text-lg font-medium text-[#757095] leading-[26px]'>Why kept very ever home mrs. Considered sympathize ten <br /> uncommonly occasional assistance sufficient not. Letter of on <br /> become he tended active enable to. </p>
          <button className='  px-4 py-2 text-white mt-5 rounded-md bg-primary text-sm font-medium '>Get Started</button>
        </div>    
    </div>
    </ motion.div> 
  )
}

export default Fetcher