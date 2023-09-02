import React, { useState } from 'react'
import MenuButton from '../Componets/MenuButton'
import { disableScroll } from '../MyCodes/ed5'
import WhatWeDo from '../Componets/AboutMe/WhatWeDo'
import OurClients from '../Componets/AboutMe/OurClients'
import ContactUs from '../Componets/AboutMe/ContactUs'
import Shop from './SubPages/Shop'
import { AiOutlineMenu } from 'react-icons/ai'
import HERO from '../assets/httpHero.jpg'
import Bookings from './SubPages/Bookings'
import Blog from './SubPages/Blog'
import Portfolio from './SubPages/Portfolio'
import CodingClass from './SubPages/CodingClass'

function Home() {
    const tabs = ['Coding Class', 'Bookings', 'Shop', 'Blog', 'Portfolio']
    const infoTabs = ['About Me', 'Our Clients', 'Contact Me']
    const [selectedInfoTab, setSelectedTab] = useState({})
    const [onPage, setOnPage] = useState()
    const infoTabToggle = (tabName) => {
        setSelectedTab({ [tabName]: true })
    }

    console.log(onPage)
    const toPortfolio = () => {
        setOnPage('Portfolio')
        disableScroll(true)
    }
    return (
        <div>
            < div className={`h-[860px] m-auto flex flex-col md:flex-row  w-full text-white bg-black top-12 ${onPage ? 'sticky' : 'relative gap-2'} `} >
                {tabs.map(item => {
                    return (
                        <>
                            <MenuButton
                                key={item}
                                item={item}
                                onPage={onPage}
                                setOnPage={setOnPage}
                            />
                            <div className={`fixed fadeIn  z-[99]  ${onPage == item ? ' overflow-x-scroll h-full w-screen top-10 md:top-44   scale-100 opacity-100 ' : 'h-0 w-0  scale-95 opacity-0 top-10'} hidescroll  bg-black text-white`}>
                                <button onClick={() => { setOnPage(undefined); disableScroll(false) }} className='h-12 z-0 w-full bg-black center md:scale-0  border-white'>
                                    <h1 className='font-bold text-3xl'><AiOutlineMenu size={32} /></h1>
                                </button>
                                {(item == 'Shop') ? <Shop onPage={onPage} /> :
                                    item == 'Bookings' ? <Bookings onPage={onPage} /> :
                                        item == 'Blog' ? <Blog onPage={onPage} /> :
                                            item == 'Portfolio' ? <Portfolio onPage={onPage} /> :
                                                item == 'Coding Class' ? <CodingClass onPage={onPage} /> :
                                                    <div>{(item == onPage) ? item : ''}</div>

                                }
                            </div>

                        </>
                    )
                })
                }
            </div >

            <div className="h-[90%] flex flex-col justify-center items-center p-4 gap-4 mt-40">
                <h1 className='text-white text-7xl font-bold  w-fit m-auto hover:scale-105 trans-slow'>Featured Portfolio</h1>
                <div className='flex flex-col p-2   justify-center items-center md:flex-row gap-4 h-full w-full'>
                    <div className='h-60 w-full group overflow-hidden relative no-scrollbar md:h-96 md:w-96  hover:scale-105 trans rounded-3xl'>
                        <a href='https://humainegrandeur.netlify.app/Shop' target="_blank" rel="noopener noreferrer" className='h-full w-full rounded-3xl bg-gradient-to-r flex-col flex justify-center items-center p-2 z- from-black to-gray-800 -500 absolute   hover:opacity-50 trans-slow opacity-95'>
                            <h1 className='text-5xl md:text-left text-center font-bold text-white group-hover:text-opacity-0 trans-slow'>Humaine Grandeur</h1>
                            <h1 className=' text-sm text-white group-hover:text-opacity-0 trans-slow'>Urban clothing line</h1>
                        </a>
                        <iframe className='w-full h-full no-scrollbar' src="https://humainegrandeur.netlify.app/Shop" title="description"></iframe>
                    </div>
                    <div className='flex flex-col  h-96 w-full md:w-fit  justify-center items-center gap-4'>
                        <button className='   w-full md:w-96 rounded-3xl group h-48 hover:scale-105 overflow-hidden relative trans'>
                            <a href='https://5isthegoat.netlify.app/' target="_blank" rel="noopener noreferrer" className='h-full w-full rounded-3xl bg-gradient-to-r flex-col flex justify-center items-center p-2 z- from-black to-gray-800 -500 absolute   hover:opacity-50 trans-slow opacity-95'>
                                <h1 className='text-5xl md:text-left text-center font-bold text-white group-hover:text-opacity-0 trans-slow'>5istheGoat</h1>
                                <h1 className=' text-sm text-white group-hover:text-opacity-0 trans-slow'>my Old Website</h1>
                            </a>
                            <iframe className='w-full h-full no-scrollbar' src="https://5isthegoat.netlify.app/" title="description"></iframe>
                        </button>
                        <button className='bg-red-900 group w-full md:w-96 relative rounded-3xl h-48 hover:scale-105 trans overflow-hidden'>
                            <a href='https://voidcard.netlify.app/BV89o4Y7oveCwfnZCpFboVaC0b13' target="_blank" rel="noopener noreferrer" className='rounded-3xl h-full w-full bg-gradient-to-r flex-col flex justify-center items-center p-2  from-black to-rose-500 absolute   hover:opacity-50 trans-slow opacity-80'>
                                <h1 className='text-5xl font-bold text-white group-hover:text-opacity-0 trans-slow'>Void Card</h1>
                                <h1 className=' text-sm text-white group-hover:text-opacity-0 trans-slow'>Digital Bussiness Cards</h1>
                            </a>
                            <iframe className='w-full h-full no-scrollbar' src="https://voidcard.netlify.app/BV89o4Y7oveCwfnZCpFboVaC0b13" title="description"></iframe>

                        </button>
                    </div>

                </div>
                <button onClick={toPortfolio} className='text-white hover:text-red-500 hover:scale-110 trans'>more...</button>
            </div>

            <div className='center my-24'>
                <div className='h-[26rem] w-52 overflow-hidden   mb-2'>
                    <div className='h-40 w-52 bg-white z-10 relative overflow-hidden'>
                        <img className='object-cover h-fit scale-[1.5] relative  right-7' src={HERO} alt="" />
                    </div>
                    <div className='h-40 w-52 p-2 bg-red-500 z-10 relative overflow-hidden'>
                        <h1 className='hover:scale-10 text-center hover:first-letter:bg-rose-500 trans-slow text-sm md:text-normal first-letter:text-4xl'>
                            A highly skilled and motivated
                            full-stack developer.
                        </h1>
                        <h1 className='text-xs text-center'>
                            "If you can Imagine it. I can build it!"
                        </h1>
                    </div>
                    <div className='relative bottom-32 rotate-[10deg] h-48 right- w-64 bg-red-500'></div>
                </div>
            </div>



            <div className='center m-4 gap-4'>
                {infoTabs.map(item => {
                    return (
                        <button key={item} onClick={() => { infoTabToggle(item) }} className={`${selectedInfoTab[item] ? 'scale-[1.1] bg-red-900 ' : 'bg-red-500 hover:scale-105 hover:bg-red-500'} h-12 w-32 font-bold trans-slow   rounded-full`} >
                            {item}
                        </button>
                    )
                })
                }

            </div>

            <div className='h-96 text-white relative'>
                {
                    Object.keys(selectedInfoTab)[0] == 'About Me' ?
                        <WhatWeDo /> :
                        Object.keys(selectedInfoTab)[0] == 'Our Clients' ?
                            <OurClients /> :
                            Object.keys(selectedInfoTab)[0] == 'Contact Me' ?
                                <ContactUs /> : <></>
                }
                <img className='object-cover h-full w-full' src="https://images.unsplash.com/photo-1691531315982-f6bccf4bd875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="" />
            </div>



        </div>
    )
}

export default Home