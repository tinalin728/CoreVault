import React from 'react'

export default function Tag({ text, classes }) {
    return (
        <div className={`uppercase tracking-widest w-fit rounded-lg font-medium ${classes}`}>
            <span className='text-blue text-sm md:text-base'> {text} </span>
        </div>
    )
}
