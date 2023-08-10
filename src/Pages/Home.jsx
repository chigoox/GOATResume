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

function Home() {
    const tabs = ['Mastry Class', 'Bookings', 'Merch', 'Shop', 'Blog', 'Meditation Programs']
    const infoTabs = ['What we Do', 'Our Clients', 'Contact Us']
    const [selectedInfoTab, setSelectedTab] = useState({})
    const [onPage, setOnPage] = useState()
    const infoTabToggle = (tabName) => {
        setSelectedTab({ [tabName]: true })
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
                                {(item == 'Products' || item == 'Merch') ? <Shop onPage={onPage} /> :
                                    item == 'Bookings' ? <Bookings onPage={onPage} /> :
                                        item == 'Blog' ? <Blog onPage={onPage} />
                                            : <div>{(item == onPage) ? item : ''}</div>
                                }
                            </div>

                        </>
                    )
                })
                }
            </div >
            <h1 className='m-12 text-3xl text-white text-center mt-96 mb-40 z-0'> About Us</h1>
            <div className='center'>
                <div className='h-[26rem] w-52 overflow-hidden   mb-2'>
                    <div className='h-48 w-52 bg-white z-10 relative overflow-hidden'>
                        <img className='object-cover h-fit scale-[1.5] relative top-16 right-7' src={HERO} alt="" />
                    </div>
                    <div className='h-32 w-52 p-2 bg-lime-300 z-10 relative overflow-hidden'>
                        <h1 className='text-2xl font-bold'>Name here</h1>
                        <h1 className='text'>-Title</h1>
                        <h1 className='text-lg mt-24'>"what you do here and here and here and here... see?"</h1>
                    </div>
                    <div className='relative bottom-32 rotate-[10deg] h-48 right- w-64 bg-lime-300'></div>
                </div>
            </div>

            <div className='center m-4 gap-4'>
                {infoTabs.map(item => {
                    return (
                        <button key={item} onClick={() => { infoTabToggle(item) }} className={`${selectedInfoTab[item] ? 'scale-[1.1] bg-green-900 ' : 'bg-lime-300 hover:scale-105 hover:bg-lime-500'} h-12 w-32 font-bold trans-slow   rounded-full`} >
                            {item}
                        </button>
                    )
                })
                }

            </div>

            <div className='h-96 text-white relative'>
                {
                    Object.keys(selectedInfoTab)[0] == 'What we Do' ?
                        <WhatWeDo /> :
                        Object.keys(selectedInfoTab)[0] == 'Our Clients' ?
                            <OurClients /> :
                            Object.keys(selectedInfoTab)[0] == 'Contact Us' ?
                                <ContactUs /> : <></>
                }
                <img className='object-cover h-full w-full' src="https://wallpapers.com/images/hd/alien-riding-a-car-jemmqlkvfkm03ys7.webp" alt="" />
            </div>

        </div>
    )
}

export default Home