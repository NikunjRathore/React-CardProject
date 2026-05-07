import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export const Leftcontent:React.FC = () => {
  return (
    <div className='h-full w-2/3 flex flex-col justify-between bg-white py-10'>
      <div className='px-3'>
        <h3 className='text-5xl font-bold mb-8'> Prospesctive <br /><span>Customer</span> <br /><span>Suggestion</span> </h3>
        <p className='text-grey'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius suscipit assumenda, corrupti nostrum voluptatem quidem, in illo nesciunt aliquid delectus iure cupiditate sit? Labore nulla nisi autem iusto neque.</p>
      </div>
      <div> <ArrowUpRight size={50} /></div>
    </div>
  )
}
