import React from 'react'
import { disableScroll } from '../MyCodes/ed5';

export const MenuButton = ({ item, onPage, setOnPage }) => {
    const onClick = () => {
        setOnPage(onPage == item ? undefined : item)
        disableScroll(onPage != item)
    }

    return (
        < button onClick={onClick} className={`${onPage ? ' h-32 md:z-50 ' : 'h-[9.5rem] md:h-full'} relative center trans-slow  text-black :hover-border-2 group md:w-96 bg-red-400  md:overflow-hiddenm`} >
            <div className={`absolute h-[97%] md:h-[98%] trans-slow z-10 w-[98%] group-hover:bg-slate-400 opacity-60 border-opacity-100 group-hover:border-2 ${onPage == item ? ' border-rose-700 border-2' : 'border-rose-400'} `}></div>
            <h1 className={`${onPage ? 'text-xl text-red-400 bg-opacity-50 w-28' : 'text-3xl w-fit text-red-500'} bg-black bg-opacity-70 p-2 font-bold text-center  absolute z-10 trans-slow hover:scale-110 rounded`}>{item}</h1>
            <img className='object-cover h-full w-full group-hover:scale-105 trans-slow' src={
                (item == 'Coding Class') ? 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' :
                    (item == 'Bookings') ? 'https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2448&q=80' :
                        (item == 'Shop') ? 'https://images.unsplash.com/photo-1583922606661-0822ed0bd916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1977&q=80' :
                            (item == 'Blog') ? 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=996&q=80' :
                                (item == 'Portfolio') ? 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80' :
                                    ''
            } alt=" " />

        </button >
    )
}

export default MenuButton