import React from 'react'
import { Leftcontent } from './leftcontent.tsx'
import Rightcontent from './rightcontent.tsx'

const Pagecontent:React.FC=()=> {
  return (
    <div className='h-[88vh] flex gap-x-10 align-center px-18 py-3 bg-white'>
        <div className='flex shrink-0 w-1/3'>
          <Leftcontent />
        </div>
        <div className='flex-1 overflow-x-auto overflow-y-hidden'>
          <Rightcontent />
        </div>
    </div>
  )
}

export default Pagecontent