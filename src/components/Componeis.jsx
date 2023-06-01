import React from 'react'
import { Comapny } from '../constant'

const Componies = () => {
  return (
    <div className='w-full container mx-auto'>
      <div className='   flex flex-col  items-center  '>
        <div className='pb-5'>
          <h1 className=' font-medium text-xl'>Over 32k+ software  businesses growing with AR Shakir.</h1>
        </div>
        <div className=' flex flex-row  justify-between items-center md:gap-16 gap-3'>
        {Comapny.map((coe,index) =>(
                  <img key={coe.id} src={coe.imge} alt="" className='md:w-[80px] w-[50px]' />
                ) )}
        </div>
      </div>
    </div>
  )
}

export default Componies