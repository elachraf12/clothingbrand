import React from 'react'
import HowitWorksImg from '/img/bg2.jpg'
import { CheckCircle } from 'lucide-react'
const HowitWorks = () => {
  return (
    <div className='flex h-screen bg-[#f9f6f5] '>
        <div className=' relative w-1/2 px-36  py-24 space-y-8 '>
            <h1 className='text-4xl font-bold'>How it Works</h1>
            <p className='w-[30em] font-light'>
            Add a description of your offer and key benefits. What it is and how it helps your customer.
            </p>
            <div className='flex flex-col gap-7'>
                <div className='flex gap-4 items-center '>
                <div className='relative w-3 h-3 border rounded-full p-8' ><span className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold   '>1</span></div>
                <p className='w-[15em]'>Click on the button below and
                  <h1 className='text-lg font-bold text-amber-500/90 underline '> fill the form.</h1>
                   </p>
                </div>
                <div className='flex gap-4 items-center '>
                <div className='relative w-3 h-3 border rounded-full p-8' ><span className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold   '>2</span></div>
                <p className='w-[15em]'>Get Discount Coupon on Your Mail
                   </p>
                </div>
                <div className='flex gap-4 items-center '>
                <div className='relative w-3 h-3 border rounded-full p-8' ><span className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold   '>3</span></div>
                <p className='w-[15em]'>Go to our store www.samplebrand.com and buy everything cheaper
                   </p>
                </div>
            </div>
            <div className='absolute bg-black text-white w-[15em] h-[15em] top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col gap-8   '>
               
              
                <div className='flex gap-4 items-center '>
                    <CheckCircle />
                    <h1>Strong Point 1</h1>
                </div>
                <div className='flex gap-4 items-center '>
                    <CheckCircle />
                    <h1>Strong Point 1</h1>
                </div>
                <div className='flex gap-4 items-center '>
                    <CheckCircle />
                    <h1>Strong Point 1</h1>
                </div>
                <div className='flex gap-4 items-center  '>
                    <CheckCircle />
                    <h1>Strong Point 1</h1>
                </div>
            </div>
        </div>
        <div
        className="w-1/2 bg-[url('/img/bg2.jpg')] bg-fixed h-full py-20  bg-no-repeat bg-right"
        
      ></div>
        
    </div>
  )
}

export default HowitWorks
