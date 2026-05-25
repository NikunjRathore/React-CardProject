import React from 'react'

export const RightContent:React.FC = () => {
  return (
    <div className='p-4 sm:p-6 md:p-10 lg:p-20 flex flex-col mt-4 md:mt-10'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'> Understanding the Market</h1>
      <p className='mt-4 sm:mt-6 md:mt-10 text-sm sm:text-base'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est eveniet libero inventore maiores sunt atque nostrum, impedit quidem repellendus alias, culpa fugit, dolorum mollitia. Dolor alias omnis perferendis culpa.</p>
      <p className='mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quia laudantium. Dolore maiores incidunt, nobis soluta consectetur corporis, temporibus sed quibusdam aut officia vero facilis hic similique aperiam. Cum, officiis!</p>
      <button className='bg-blue-500 rounded-lg sm:rounded-2xl px-4 sm:px-5 py-2 mt-4 md:mt-5 w-fit hover:cursor-pointer text-sm sm:text-base'> Know More</button>
    </div>
  )
}

export default RightContent
