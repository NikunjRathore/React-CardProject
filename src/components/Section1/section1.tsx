import React from 'react'
import Navbar from './navbar.tsx'
import Pagecontent from './pagecontent.tsx'

const Section1:React.FC=()=> {
  return (
    <div className='min-h-screen w-full bg-amber-400 flex flex-col'>
      <Navbar></Navbar>
      <Pagecontent />
    </div>
  )
}

export default Section1