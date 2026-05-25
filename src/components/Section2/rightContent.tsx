import React from 'react'

export const RightContent:React.FC = () => {
  return (
    <div className='p-20 flex flex-col mt-10'>
      <h1 className='text-4xl font-bold'> Understanding the Market</h1>
      <p className='mt-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est eveniet libero inventore maiores sunt atque nostrum, impedit quidem repellendus alias, culpa fugit, dolorum mollitia. Dolor alias omnis perferendis culpa.</p>
      <p className='mt-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quia laudantium. Dolore maiores incidunt, nobis soluta consectetur corporis, temporibus sed quibusdam aut officia vero facilis hic similique aperiam. Cum, officiis!</p>
      <button className='bg-blue-500 rounded-2xl px-5 py-2 mt-5 w-fit hover:cursor-pointer'> Know More</button>
    </div>
  )
}

export default RightContent
