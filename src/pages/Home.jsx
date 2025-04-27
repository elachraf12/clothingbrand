import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-[url('/img/intro_photo.jpg')] bg-fixed bg-cover bg-center">
      <div className=" z-10">
        <Navbar />
        <Hero />
      </div>
    </div> 
  )
}

export default Home
