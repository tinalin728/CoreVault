import React from 'react'

export default function PrimaryBtn({ text = '' }) {
    return (
        <a href="#" className='bg-accent text-white font-medium rounded-full uppercase tracking-wider text-base text-center flex justify-center items-center min-w-[200px] px-6 py-3 shadow-[3px_3px_2px_rgba(0,0,0,0.1),inset_2px_3px_4px_rgba(255,255,255,0.3)]
                    hover:translate-y-[1px] hover:shadow-[inset_3px_3px_5px_rgba(0,0,0,0.75),] md:text-[18px] w-full text-nowrap'>
            {text}

        </a>
    )
}

// inset 1px 1px 6px rgba(0,0,0,0.1), inset -1px -1px 3px rgba(243,233,238,0.5)