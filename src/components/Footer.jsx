import React from 'react'
import { footerLinks } from '../constant'

const Footer = () => {
  return (
    <div
    
    className=" bg-[#121313] " >
    <div className=" container mx-auto justify-center flex md:flex-row flex-col  items-start gap-3 text-white border-y p-10 border-[#404444] ">
        <div className=' w-full'>
          <h1 className=' font-bold text-[20pt] '>AR Shakir</h1>
          <p className=' text-[16px] leading-[26px] font-medium text-white mt-4 opacity-[0.4]'>Yet bed any for travelling assistance indulgence unpleasing. Not <br /> thoughts all exercise blessing. Indulgence way everything joy <br /> alteration boisterous the attachment.</p>
        </div>
        <div className=" w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="text-[21px] pb-4 font-bold text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-2">
              {footerlink.links.map((link, index) => (
                <li
                key={link.name}
                  className={` font-medium text-[16px] leading-[24px] text-white cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
    </div>
    <div className='flex flex-row py-5 font-bold items-center container mx-auto md:text-[12px] text-[7px] text-white m-auto justify-between '>
    <p className=''>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
    <p className='text-white'>Supported by Microsoft Startup</p> 
    </div>
  
   </div>
   
  )
}

export default Footer