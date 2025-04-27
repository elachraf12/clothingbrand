import React from 'react'
import AboutImg from '/img/bg1.jpg'
import { Leaf, RecycleIcon, Globe, Info } from 'lucide-react'
  
const About = () => {
  return (

    <div className='relative h-screen bg-[url("/img/bg1.jpg")] bg-fixed bg-cover bg-center bg-no-repeat w-full'>
    
      <div className='absolute z-10 p-4 space-y-10 right-[10%] top-20  ' >
        <h1 className='text-4xl font-bold'>About Us</h1>
        <div className='space-y-5'>
        <p className='w-[30em] font-light'>Add a description of your offer and key benefits. What it is and how it helps your customer. Add a description of your offer and key benefits. What it is and how it helps your customer.</p>
        <p className='w-[30em] font-light'>Add a description of your offer and key benefits. What it is and how it helps your customer. Add a description of your offer and key benefits.</p>
        
        </div>
        <div className='flex gap-14 mt-8'>
          <div className='w-28 h-28 rounded-full bg-white/90 flex items-center justify-center'>
            <Leaf className="h-10 w-10" strokeWidth={1.5} />
          </div>
          
          <div className='w-28 h-28 rounded-full bg-white/90 flex items-center justify-center'>
            <RecycleIcon className="h-10 w-10" strokeWidth={1.5} />
          </div>
          
          <div className='w-28 h-28 rounded-full bg-white/90 flex items-center justify-center'>
            <Globe className="h-10 w-10" strokeWidth={1.5} />
          </div>
        </div>
        <div className='flex gap-1 items-center'>
            <Info className='h-5 w-5'  />
            <p><span className='font-bold underline'>Read more</span> about organic cotton</p>
        </div>
        <div className='absolute top-1/2 left-0 -translate-x-[15em] bg-black text-white p-10 flex flex-col gap-2 justify-center items-center'>
            <h1 className='text-4xl font-bold'>100%</h1>
            <h1>organic cotton</h1>
        </div>
      </div>
    </div>
  )
}

export default About
