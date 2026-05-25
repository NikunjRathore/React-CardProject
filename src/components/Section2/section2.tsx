import React from 'react'
import LeftPhoto from "./leftphoto"
import RightContent from "./rightContent"


const Section2: React.FC=()=> {
  return (
    <div className='min-h-screen w-full flex flex-col md:flex-row p-4 sm:p-6 md:p-10 gap-6 md:gap-0'>
      <div className='w-full md:w-1/3'>
        <LeftPhoto/>
      </div>
      <div className='w-full md:w-2/3'>
        <RightContent/>
      </div>
    </div>
  )
}

export default Section2