import React from 'react'
import Navbar from './navbar.tsx'
import Pagecontent from './pagecontent.tsx'

const Section1:React.FC=()=> {
  return (
    <div className='h-screen w-full bg-amber-400'>
      <Navbar></Navbar>
      <Pagecontent />
    </div>
  )
}

export default Section1