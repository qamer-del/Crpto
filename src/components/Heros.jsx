import React from 'react'
import { heroimg } from '../assets'

const Heros = () => {
  return (
    <div className=' container mx-auto w-full  md:pt-52 pt-32 '>
      <div className='md:max-w-[1720px] sm:max-w-[800px] max-w-[450px]   m-auto  flex flex-col  items-center  '>
      <img src={heroimg} className=' md:mt-[-24rem] mt-[-14rem] z-[1]' />
    </div>
    </div>
  )
}

export default Heros