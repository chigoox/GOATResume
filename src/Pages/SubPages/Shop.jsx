import React, { useEffect, useState } from 'react'
import AllProductFromCategory from '../../Componets/Shop/AllProductFromCategory';
import { getRand, isDev } from '../../MyCodes/ed5';

const Shop = ({ onPage }) => {
    const categories = ['Clothes1', 'Tech Merch2']
    const subCategories = ['Shirts1', 'Hoodies1', 'VoidCard2', 'Other2']
    const [width, setWidth] = useState(window.innerWidth);
    const [catCount, setCatCount] = useState(3)
    const ItemCount = getRand(12)
    const [openSubCategory, setOpenSubCategory] = useState(false)

    const [PRODUCTDATA, SETPRODUCTDATA] = useState()





    async function fetchProuductsFromStripe() {
        fetch(`${isDev() ? 'https://voidappx.netlify.app/' : '/.'}netlify/functions/FetchProducts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            res.json().then(res => {
                const { products } = res
                SETPRODUCTDATA(products)
            })
        })
    }

    console.log(PRODUCTDATA)


    const checkOut = async (price) => {
        const STRIPE_CART = { quantity: 1, price: price }

        fetch('/.netlify/functions/CheckOut', {
            method: 'POST',
            redirect: 'follow',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cart: STRIPE_CART
            })
        }).then(res => {
            res.json().then(res => {

                window.location.href = res.url

            })
        })
    }

    useEffect(() => {
        const fetch = async () => { await fetchProuductsFromStripe() }
        fetch().then(

        )
    }, [])


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
                                        <h1 className='text-2xl text-red-400 font-bold border-red-300 text-center'>{itemCat}</h1>
                                        <div className='center flex-col'>
                                            {subCategories.map(itemSub => {
                                                if (itemCat.match(/\d+/)[0] == itemSub.match(/\d+/)[0]) {
                                                    return (
                                                        <button key={itemSub} onClick={() => { openItem(ItemCount) }} className='my-2'>
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
                                        <div className='grid md:grid-flow-rows md:grid-cols-2 gap-2 gap-x-5 w-[60rem]'>
                                            {subCategories.map((itemSub, index) => {
                                                if (itemCat.match(/\d+/)[0] == itemSub.match(/\d+/)[0]) {
                                                    const subCatImage = (itemSub.includes('Shirts')) ? 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' :
                                                        (itemSub.includes('Hoodies')) ? 'https://images.unsplash.com/photo-1512400930990-e0bc0bd809df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' :
                                                            (itemSub.includes('Other')) ? 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' :
                                                                (itemSub.includes('Void')) ? 'https://images.unsplash.com/photo-1597463330912-eb868206b68e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80' : ''
                                                    return (
                                                        <button key={index} onClick={() => { openItem(ItemCount) }} className='flex gap-2 md:center items-center '>
                                                            <div className='h-24 w-24 md:h-38 md:w-38 rounded-full bg-white center overflow-hidden'>
                                                                <img className='object-cover h-full w-full' src={subCatImage} alt="" />
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