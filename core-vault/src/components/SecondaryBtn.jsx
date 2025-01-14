import React from 'react'

export default function SecondaryBtn({ text = "" }) {
    return (
        <a href="#" className='bg-transparent text-white font-medium px-4 py-3 rounded-lg uppercase tracking-wider text-base border-2 border-nude-white md:text-[18px] shadow-[3px_3px_2px_rgba(0,0,0,0.1),inset_2px_3px_4px_rgba(255,255,255,0.3)]  hover:translate-y-[1px] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)] '>
            {text}
        </a>
    )
}
