import React from 'react'
import { imgbtn, v1, v6, v8 } from '../assets'
import {  motion } from 'framer-motion'
const Hero = () => {
  return (
    <div id='hero' className="w-full flex  justify-between items-center relative  bg-primary text-white">
    <motion.div
     initial={{ opacity: 0, }}
     whileInView={{ opacity: 1, }}
     transition={{
       duration: 2.8
     }} 
    className=" container mx-auto flex  flex-col items-center justify-between  ">
      <h1 className=' font-extrabold md:text-[60px] text-[40px] md:leading-[80px] leading-[50px] pt-10 text-center'>Managing your crypto portfolio <br /> has never been easier</h1>
      <p className=' font-medium text-xl leading-[30px] text-center md:py-10 py-7'>End-to-end payments and financial management in a single solution. <br /> Meet the right platform to help realize.</p>
      <div className=' flex flex-row justify-around gap-10 pb-[230px]'>
      < motion.button 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9  }}
      className='  px-4 rounded-full bg-btn text-base font-medium z-[1] '>Get Started</ motion.button>
      < motion.img
       whileHover={{ rotate:-360, scale:1.9 }}
      src={imgbtn} alt="btn" className=' w-[50px] cursor-pointer z-[1] ' />
      </div>
      <div className=' absolute top-[30%] left-[-5%] w-[300px] h-[300px] z-[0] bg-[#10C7DD] blur-[170px]'></div>
      <div className=' absolute top-[40%] right-[17%] w-[300px] h-[300px] z-[0]  bg-[#10C7DD] blur-[170px]'></div>
      <img src={v1} className=' absolute top-[40%] left-[20%]' />
      <img src={v6} className=' absolute top-[30%] right-[10%]' />
      <img src={v8} className=' absolute top-[-100px] right-[30%]' />
     
    </ motion.div> 
    </div>
  )
}

export default Hero