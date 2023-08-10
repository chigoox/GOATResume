import React, { useEffect, useState } from 'react'

const AllProductFromCategory = ({ count, toggleSubCategory }) => {
    const [items, setitems] = useState([])
    useEffect(() => {
        setitems([...Array(count).keys()])


    }, [])

    return (
        <div className='absolute z-[99999] h-full w-full lg:w-[76%] trans top-0 left-0 lg:left-64  bg-black p-2'>
            <div className='h-4 md:h-7'></div>
            <button className='  w-fit z-[999]  relative bg-black' onClick={() => { toggleSubCategory() }}>
                <h1 className='StarbucksFont'>Store/xxx</h1>
            </button>
            <h1 className='text-3xl mb-4 StarbucksFont'>SUBCAT NAME</h1>
            <div className='grid grid-cols-2 md:grid-cols-3  gap-4  relative md:w-[70%] w-full'>
                {
                    items.map(item => {
                        return (
                            <div key={item} className='bg-white rounded-full w-40 h-40 m-auto'>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProductFromCategory