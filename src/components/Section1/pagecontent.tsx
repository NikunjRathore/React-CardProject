import React from 'react'
import { Leftcontent } from './leftcontent.tsx'
import Rightcontent from './rightcontent.tsx'

const Pagecontent:React.FC=()=> {
  return (
    <div className='flex-1 flex flex-col md:flex-row gap-4 md:gap-x-10 align-center px-4 sm:px-6 md:px-12 lg:px-18 py-3 bg-white'>
        <div className='flex shrink-0 w-full md:w-1/3'>
          <Leftcontent />
        </div>
        <div className='w-full md:flex-1 overflow-x-auto overflow-y-hidden'>
          <Rightcontent />
        </div>
    </div>
  )
}

export default Pagecontent