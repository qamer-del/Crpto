import React from 'react'
import {  girl } from '../assets'
import { motion } from 'framer-motion'

const Fetcher = () => {
  return (
    < motion.div 
    initial={{ opacity: 0 ,y:'-50%' }}
    whileInView={{ opacity: 1 , y:0 }}
    transition={{duration:0.9}}
    id='hero' className="container mx-auto flex  justify-between items-center ">
    <div className="  flex mt-10 md:flex-row flex-col items-start justify-between  ">
        <div>
        <p className='text-primary text-lg font-extrabold mt-[2.5rem] w-full'>Our Feature</p>
          <h1 className=' md:text-[50px] text-[30px] font-bold md:leading-[56px] leading-[40px] pb-3'>  All payments can be <br /> managed from one account</h1>
          <p className=' text-lg font-medium text-[#757095] leading-[26px]'>Why kept very ever home mrs. Considered sympathize ten <br /> uncommonly occasional assistance sufficient not. Letter of on <br /> become he tended active enable to. </p>
          <button className='  px-4 py-2 text-white mt-3 rounded-md bg-primary text-sm font-medium '>Get Started</button>
        </div>
        <div className='' >
        <img src={girl} alt="cards" /> 
        </div>    
    </div>
    </ motion.div>
  )
}

export default Fetcher