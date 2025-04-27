
import React from 'react'
import Home from './pages/Home'
import LookBook from './pages/LookBook'
import ProductsPage from './pages/productsPage'
import About from './pages/About'
import HowitWorks from './pages/HowitWorks' 
import Form from './pages/form'
const App = () => {
  return (
    <div className="scroll-smooth">
    <div id="home"><Home /></div>
    <div id="lookbook"><LookBook /></div>
    <div id="products"><ProductsPage /></div>
    <div id="about"><About /></div>
    <div id="howitworks"><HowitWorks /></div>
    <div id="form"><Form /></div>
  </div>
  )
}


export default App
