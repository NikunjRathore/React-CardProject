import React from 'react'
import { ArrowRight } from 'lucide-react';

interface CardImage{
  imageSrc: string,
  num: number
  // content: string
}

const RightCard:React.FC<CardImage>=({imageSrc,num})=> {
  return (
    <div className='w-40 sm:w-48 md:w-60 aspect-3/4 rounded-3xl sm:rounded-4xl shrink-0 relative overflow-hidden'>
        <img className='h-full w-full object-cover object-center' src={imageSrc}/>
        <div className='absolute top-0 left-0 h-full w-full p-3 sm:p-4 flex flex-col justify-between' >
          <h2 className='bg-white h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center rounded-full text-sm sm:text-base'>{num}</h2>
          <div>
            <h3 className='text-white mb-2 text-xs sm:text-sm'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ad labore porro corporis quas aliquid.</h3>
            <div className='flex justify-center gap-1'>
              <button className='bg-blue-700 rounded-full text-white font-semibold px-2 sm:px-3 py-1 text-xs sm:text-sm'> Satisfied</button>
              <button className='bg-blue-700 rounded-full text-white font-semibold px-2 sm:px-3 py-1'> <ArrowRight size={16} className='sm:w-5 sm:h-5'/> </button>
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default RightCard