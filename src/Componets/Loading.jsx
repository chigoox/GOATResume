import { Spinner } from '@nextui-org/react'
import React from 'react'

function Loading({ contain, lable }) {
    return (
        <div className={`${contain ? 'h-full w-full' : 'h-screen w-screen'} center text-lime-600 fixed z-[999999] bg-black bg-opacity-50 border border-lime-600 `}>
            <Spinner label={lable} color="success" labelColor="success" />
        </div>
    )
}

export default Loading