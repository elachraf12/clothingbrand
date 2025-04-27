import React from 'react'
import Footer from '../components/footer'
const form = () => {
  return (
    <div className=' h-screen bg-[url("/img/bg3.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full'>
     <div className='relative w-full h-full bg-black/30'>
     <div className='absolute bg-amber-500/90 w-[30em] h-[25em] top-[20em] right-0 -translate-x-[10em] -translate-y-1/2 flex flex-col gap-5 py-10 px-20 '>
        <h1 className='text-3xl w-[10em] text-center '><span className=' font-bold'>Fill the form </span>and get Discount Coupon</h1>
        <div className='flex flex-col gap-5 w-full '>
            <input type="text" placeholder='Your Name' className='bg-white w-full py-3.5 px-4 ' />
            <input type="email" name="" id="" placeholder='Your Email' className='bg-white w-full py-3.5 px-4 ' />
        </div>
        <div className='flex gap-2 items-center '>
            <input type="checkbox" name="" id="" className='w-3 h-3' />
            <p className='text-xs mt-1'> I agree to receive commercial information from [...]</p>
        </div>
      <div className='flex justify-center'>
      <button className='bg-black px-10 py-3 text-white text-xl w-[15em] '>Get Discount Coupon</button>
      </div>
      </div>
     <div className='absolute bottom-0 w-full'>
     <Footer  />
     </div>
     </div>
    </div>
  )
}

export default form
