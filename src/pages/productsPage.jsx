import React from 'react'
import { ProductContent } from '../context'
import GDCbutton from '../components/GDCbutton'
const productsPage = () => {
  return (
    <div className='relative bg-white min-h-screen px-36 py-16 space-y-5'>
      <h1 className='text-4xl font-bold'>Products</h1>
      <p>Add a description of your offer and key benefits. What it is and how it helps your customer.Add a description of your offer and key benefits. What it is and how it helps your customer.</p>
      <div className='relative grid grid-cols-2 '>
        {
            ProductContent.map((item) => (
                <div key={item.id} className='relative'>
                    <div>
                        <img src={item.img} alt="" className='h-[500px]' />
                    </div>
                    <div className='absolute top-10 left-10'>
                        <h1  className='text-2xl font-semibold'>{item.name}</h1>
                        <div className='flex gap-2 items-center'>
                            <p className='text-2xl'> ${item.price}</p>
                            <p className='text-lg line-through'>${item.oldPrice}</p>
                            
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
      <h1 className='text-center text-2xl '>...and many more</h1>
      <div className='flex justify-center'>
      <GDCbutton />
      </div>
    </div>
  )
}

export default productsPage
