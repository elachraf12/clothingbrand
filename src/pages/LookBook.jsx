import React from 'react'
import { LookBookContent } from '../context'
const LookBook = () => {
  return (
    <div className='relative bg-white  px-36  flex gap-6'>
      {
        LookBookContent.map((item) => (
            <div key={item.id} className='relative '>
                <p className='absolute top-10 right-0 bg-amber-500/70 px-2 text-lg'>{item.discount}</p>
                <img src={item.img} alt="" />
                <h1 className='text-xl pt-4  '>{item.name}</h1>
                <div className='flex gap-2 items-center ' >
                <p className='text-2xl text-amber-500/90'>${item.price}</p>
                <p className=' text-lg line-through'>${item.oldPrice}</p>
                </div>
                
            </div>
        ))
      }
    </div>
  )
}

export default LookBook
