import React from 'react'

export const LeftPhoto:React.FC = () => {
  return (
    <div className='h-48 sm:h-60 md:h-[70vh] rounded-xl sm:rounded-2xl overflow-hidden mt-4 md:mt-10'>
        <img className='w-full h-full object-cover ' src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D'/>
    </div>
  )
}

export default LeftPhoto