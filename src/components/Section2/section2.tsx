import React from 'react'
import LeftPhoto from "./leftphoto"
import RightContent from "./rightContent"


const Section2: React.FC=()=> {
  return (
    <div className=' h-screen w-full flex p-10 '>
      <div className='w-1/3'>
        <LeftPhoto/>
      </div>
      <div className='w-2/3'>
        <RightContent/>
      </div>
    </div>
  )
}

export default Section2