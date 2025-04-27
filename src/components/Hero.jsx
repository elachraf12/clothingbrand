import React from 'react'
import GDCbutton from './GDCbutton'
const Hero = () => {
  return (
    <div className='absolute top-[20%] w-full josefin-sans py-10 px-36 text-white space-y-5'>
      <h1 className='text-4xl font-extralight'>Get special Discount</h1>
      <div className='text-7xl'>
        <h1>Up to 50% discount</h1>
        <h1 className='font-light'>on selected items</h1>
      </div>
      <p className='w-[30em] text-xl font-light'>A supporting statement for your value proposition to encourage customers to complete your CTA</p>
      <div className='flex justify-between mt-24'>
        <div className='flex gap-10'>
            <GDCbutton />
            <button className='border border-white px-10 py-5 text-xl w-[15em] cursor-pointer'><a href="#products">See products</a></button>
        </div>
        <h1 className='text-2xl w-[15em] font-light'>„Something profound about your clothing brand”</h1>
      </div>
    </div>
  )
}

export default Hero;