import React from 'react'

const WhatWeDo = () => {
    return (
        <div className='h-full w-full absolute z-10 top-0 left-0 p-2'>
            <h1 className='text-3xl font-bold text-center'>Get to Know Us</h1>
            <div className='flex gap-4 center h-32'>
                <div className='w-1/2 h-full rounded-full overflow-hidden shadow-md shadow-black'>
                    <img className={'h-full w-full object-cover'} src="https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
                <div className=' w-1/2 h-full'>
                    <h1 className='p-2'>So by colonel hearted ferrars.
                        Draw from upon here gone add one.
                        He in sportsman household.
                    </h1>
                </div>

            </div>
            <br />
            <br />
            <div className='flex gap-4 center h-32'>
                <div className=' w-1/2 h-full'>
                    <h1 className='p-2'>idered discovered. So at parties he
                        warrant oh staying. Square new horses
                        and put better end. Sincerity collected.
                    </h1>
                </div>

                <div className='w-1/2 h-full rounded-full overflow-hidden shadow-md shadow-black'>
                    <img className={'h-full w-full object-cover'} src="https://images.unsplash.com/photo-1689776552964-475fd40e0d8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo