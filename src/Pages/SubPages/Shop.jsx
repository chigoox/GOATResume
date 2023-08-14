import React, { useEffect, useState } from 'react'
import AllProductFromCategory from '../../Componets/Shop/AllProductFromCategory';
import { getRand } from '../../MyCodes/ed5';

const Shop = ({ onPage }) => {
    const categories = ['Crystals1', 'Oils2', 'IDK3']
    const subCategories = ['sub1-1', 'sub1-2', 'sub1-3', 'sub2-1', 'sub2-2', 'sub3-1', 'sub3-2', 'sub1-1', 'sub1-2']
    const [width, setWidth] = useState(window.innerWidth);
    const [catCount, setCatCount] = useState(3)
    const ItemCount = getRand(12)
    const [openSubCategory, setOpenSubCategory] = useState(false)
    const toggleSubCategory = () => {
        setOpenSubCategory(!openSubCategory)
    }
    const openItem = (count = 3) => {
        setCatCount(count)
        toggleSubCategory()
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 1023;
    return (
        <div className=' overflow-x-hidden p-4 z-[999] absolute w-full hidescroll '>

            {openSubCategory &&
                <AllProductFromCategory
                    toggleSubCategory={toggleSubCategory}
                    count={catCount}
                />}

            {(onPage == 'Shop') &&
                <div className='flex gap-24'>
                    <div hidden={isMobile} className='w-40 h-fit relative '>
                        {
                            categories.map((itemCat, index) => {
                                return (



                                    <div key={index} className='h-full w-64 mt-4 text-white '>
                                        <h1 className='text-2xl font-bold border-red-300 text-center'>{itemCat}</h1>
                                        <div className='center flex-col'>
                                            {subCategories.map(itemSub => {
                                                if (itemCat.match(/\d+/)[0] == itemSub.match(/\d+/)[0]) {
                                                    return (
                                                        <button onClick={() => { openItem(ItemCount) }} className='my-2'>
                                                            <h1 className='text-lg  w-full font-[Poppins] font-bold StarbucksFont'>{itemSub}</h1>

                                                        </button>
                                                    )
                                                }

                                            })}
                                        </div>
                                    </div>



                                )
                            })
                        }
                    </div>

                    <div className='h-[96rem]'>
                        <h1 className='text-3xl text-white font-bold my-8 w-fit md:w-[36rem] StarbucksFont'>Store</h1>

                        {
                            categories.map((itemCat, index) => {
                                return (



                                    <div key={index} className='h-fit w-full'>
                                        <div className='overflow-hidden h-16 relative my-2'>
                                            <h1 className='StarbucksFont text-2xl font-bold my-8 border-b-2  border-red-400 md:w-[70%] w-[40%] absolute z-10 -top-4 t '>{itemCat}</h1>
                                            {/* <img className='h-full w-72 md:w-full object-cover' src={
                                            itemCat == 'Crystals1' ? 'https://images.unsplash.com/photo-1521133573892-e44906baee46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
                                                : itemCat == 'Oils2' ? 'https://images.unsplash.com/photo-1626554873526-89b2c51ba12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
                                                    : itemCat == 'IDK3' ? 'https://images.unsplash.com/photo-1655856145369-cb8dcee772ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80'
                                                        : ''
                                        } alt="" />  */}
                                        </div>
                                        <div className='grid md:grid-flow-rows md:grid-cols-2 gap-2 gap-x-40 w-[60rem]'>
                                            {subCategories.map((itemSub, index) => {
                                                if (itemCat.match(/\d+/)[0] == itemSub.match(/\d+/)[0]) {
                                                    return (
                                                        <button key={index} onClick={() => { openItem(ItemCount) }} className='flex gap-2 md:center items-center '>
                                                            <div className='h-24 w-24 md:h-38 md:w-38 rounded-full bg-white center overflow-hidden'>
                                                                <img src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-gemstones-royalty-free-image-1608654719.?crop=1xw:1xh;center,top&resize=1200:*" alt="" />
                                                            </div>
                                                            <h1 className='text-xl StarbucksFont'>{itemSub}</h1>

                                                        </button>
                                                    )
                                                }

                                            })}
                                        </div>
                                    </div>



                                )
                            })
                        }
                    </div>
                </div >
            }

        </div >
    )
}

export default Shop