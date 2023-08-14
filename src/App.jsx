import { createContext, useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook } from "react-icons/ai";
import './App.css'
import Home from './Pages/Home';
import Footer from './Componets/Footers/Footer';
import LOGO from './assets/httpLOGO.png'
import UserManager from './Componets/Header/UserManager';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <div className="App w-full bg-red-500 h-96 scroll-able ">
      <div className='h-12 bg-black center gap-2 w-full z-[999] fixed'>
        <a className='center gap-1' href="./">
          <h1 className='font-bold text-lg text-white flex items-center h-full'>Void</h1>
          <img className='h-10 rounded-full border-2 border-red-500' src={LOGO} alt="" />
          <h1 className='font-bold text-lg text-white flex items-center h-full'>Apps</h1>
        </a>

        <UserManager loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      </div>
      {/* PAGES */}
      <UserContext.Provider value={loggedInUser}>
        <Home />
      </UserContext.Provider>
      {/* Footer */}
      <div className='bg-black bottom-0 w-full '>
        <Footer />
      </div>


    </div >
  )
}

export default App
