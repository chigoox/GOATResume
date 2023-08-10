import React from 'react'

const TagFilterButton = ({ setFilter, tag, color, filter }) => {
    return (
        <button onClick={() => setFilter(tag)} className={` h-8 w-fit rounded-full center ${color ? color : ''} ${filter == tag ? 'bg-gray-900 border-lime-300 border-2' : 'bg-gray-700'}`}>
            <h1 className='center p-2'>{tag}</h1>
        </button>
    )
}

export default TagFilterButton