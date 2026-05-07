import React from 'react'
import RightCard from './rightCard'

const Rightcontent:React.FC = () => {
  return (
    <div className='flex gap-5 h-full p-6 w-max overflow-x-auto'>
      <RightCard imageSrc='https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' num={1} />
      <RightCard imageSrc='https://media.istockphoto.com/id/629772336/photo/surprised-happy-beautiful-woman-looking-sideways-in-excitement-isolated.jpg?s=1024x1024&w=is&k=20&c=8cp_vkoVTpgwdAFARVkh-3gv2Kfv75zzgwSbaB4GwFs=' num={2}/>
      <RightCard  imageSrc='https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D' num={3}/>
      <RightCard imageSrc='https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' num={4}/>
    </div>
  )
}

export default Rightcontent
