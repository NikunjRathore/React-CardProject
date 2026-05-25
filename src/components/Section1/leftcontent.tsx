import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export const Leftcontent:React.FC = () => {
  return (
    <div className='h-full w-full flex flex-col justify-between bg-white py-6 md:py-10'>
      <div className='px-2 sm:px-3'>
        <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8'> Prospesctive <br /><span>Customer</span> <br /><span>Suggestion</span> </h3>
        <p className='text-sm sm:text-base text-grey'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius suscipit assumenda, corrupti nostrum voluptatem quidem, in illo nesciunt aliquid delectus iure cupiditate sit? Labore nulla nisi autem iusto neque.</p>
      </div>
      <div> <ArrowUpRight size={40} className='sm:w-12 sm:h-12' /></div>
    </div>
  )
}
