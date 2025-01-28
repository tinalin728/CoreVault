import React from 'react'

export default function SecondaryBtn({ text = "" }) {
    return (

        <a href="#" className='bg-white bg-opacity-30 text-white border border-nude-white border-opacity-5 font-medium px-6 py-4 rounded-full leading-none uppercase tracking-wider text-base md:text-[18px] shadow-custom-btn  hover:translate-y-[1px] hover:shadow-custom-hover inline-flex justify-center items-center w-full text-nowrap'>
            {text}
        </a>

    )
}
