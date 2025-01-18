import React from 'react'

export default function SecondaryBtn({ text = "" }) {
    return (

        <a href="#" className='bg-white bg-opacity-10 text-white font-medium px-6 py-4 rounded-full leading-none uppercase tracking-wider text-base border border-nude-white border-opacity-20 md:text-[18px] shadow-[3px_3px_2px_rgba(0,0,0,0.1),inset_2px_3px_4px_rgba(255,255,255,0.3)]  hover:translate-y-[1px] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)] inline-flex justify-center items-center w-full text-nowrap'>
            {text}
        </a>

    )
}
