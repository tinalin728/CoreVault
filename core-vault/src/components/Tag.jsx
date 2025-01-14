import React from 'react'

export default function Tag({ text, classes }) {
    return (
        <div className={`uppercase tracking-widest px-6 py-2 w-fit rounded-full mx-auto shadow-tag font-medium ${classes}`}>
            <span className='text-gray-500 text-sm md:text-base'> {text} </span>
        </div>
    )
}
