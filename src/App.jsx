import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook } from "react-icons/ai";
import './App.css'
import Home from './Pages/Home';
import Footer from './Componets/Footers/Footer';
import LOGO from './assets/LOGO.png'


function App() {

  return (
    <div className="App w-full bg-lime-300 h-96 scroll-able ">
      <div className='h-12 bg-black center gap-2 w-full z-[999] fixed'>
        <img className='h-10' src={LOGO} alt="" />
        <h1 className='font-bold text-lg text-white flex items-center h-full'>Higher Beings E.T</h1>
        <img className='h-10' src={LOGO} alt="" />
      </div>
      {/* PAGES */}
      <Home />
      {/* Footer */}
      <div className='bg-black bottom-0 w-full '>
        <Footer />
      </div>


    </div >
  )
}

export default App
