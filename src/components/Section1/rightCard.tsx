import React from 'react'
import { ArrowRight } from 'lucide-react';

interface CardImage{
  imageSrc: string,
  num: number
  // content: string
}

const RightCard:React.FC<CardImage>=({imageSrc,num})=> {
  return (
    <div className='h-full w-60 rounded-4xl shrink-0 relative overflow-hidden'>
        <img className=' h-full w-full object-cover' src={imageSrc}/>
        <div className='absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between' >
          <h2 className='bg-white h-10 w-10 flex justify-center items-center rounded-full'>{num}</h2>
          <div>
            <h3 className='text-white mb-2'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ad labore porro corporis quas aliquid.</h3>
            <div className='flex justify-center'>
              <button className='bg-blue-700 rounded-full text-white font-semibold px-3 py-1'> Satisfied</button>
              <button className='bg-blue-700 rounded-full text-white font-semibold px-3 py-1'> <ArrowRight/> </button>
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default RightCard