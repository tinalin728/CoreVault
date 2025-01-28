import React from 'react'

export default function PrimaryBtn({ text = '' }) {
    return (
        <a href="#" className='bg-accent text-white font-medium rounded-full uppercase tracking-wider text-base text-center flex justify-center items-center min-w-[200px] px-6 py-3 shadow-custom-btn
                    hover:translate-y-[1px] hover:shadow-custom-hover md:text-[18px] w-full text-nowrap'>
            {text}

        </a>
    )
}

// inset 1px 1px 6px rgba(0,0,0,0.1), inset -1px -1px 3px rgba(243,233,238,0.5)