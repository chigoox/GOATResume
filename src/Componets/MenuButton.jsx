import React from 'react'
import { disableScroll } from '../MyCodes/ed5';

export const MenuButton = ({ item, onPage, setOnPage }) => {
    const onClick = () => {
        setOnPage(onPage == item ? undefined : item)
        disableScroll(onPage != item)
    }

    return (
        < button onClick={onClick} className={`${onPage ? ' h-32 md:z-50 ' : 'h-[10.5rem] md:h-full'} relative center trans-slow  text-black hover-border-2 group md:w-96 bg-lime-300  md:overflow-hiddenm`} >
            <div className={`absolute h-[98%] md:h-[99%] trans-slow z-10 w-[98%] group-hover:bg-slate-400 opacity-60 border-opacity-100 group-hover:border-2 ${onPage == item ? ' border-green-400 border-4' : 'border-lime-300'} `}></div>
            <h1 className={`${onPage ? 'text-xl text-lime-200 bg-opacity-25 w-28' : 'text-3xl w-fit text-lime-400'} bg-black bg-opacity-50 p-2 font-bold text-center  absolute z-10 trans-slow hover:scale-110 rounded`}>{item}</h1>
            <img className='object-cover h-full w-full group-hover:scale-105 trans-slow' src={
                (item == 'Mastry Class') ? 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' :
                    (item == 'Bookings') ? 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' :
                        (item == 'Merch') ? 'https://images.unsplash.com/photo-1627933540891-1fb6a397c89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVyY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60' :
                            (item == 'Shop') ? 'https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80' :
                                (item == 'Blog') ? 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80' :
                                    (item == 'Meditation Programs') ? 'https://plus.unsplash.com/premium_photo-1669446008757-4c3b54f87d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80' :
                                        ''
            } alt=" " />

        </button >
    )
}

export default MenuButton