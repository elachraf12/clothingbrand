import React from 'react'
const Navbar = () => {
  return (
    <div className='absolute w-full josefin-sans flex justify-between items-center py-14 px-36 text-xl text-white '>
      <h1>Clothing Brand</h1>
      <div className=''>
        <ul className='flex gap-8 '>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#howitworks">How it works</a></li>
          <li className='text-amber-500/90'><a href="#form">Get discount coupon</a></li>
          <li><a href="#form">Contact </a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
