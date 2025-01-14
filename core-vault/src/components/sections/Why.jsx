import React from 'react'
import Tag from '../Tag'
import Lottie from "lottie-react";
import whyAnimation from '../../data/why.json'
import img from '../../../public/images/why.png'

export default function Why() {
    return (

        <section className='pt-[10rem]  max-w-container relative'>
            <Tag text='why us?' />

            <h2 className='text-center mt-4'>Tailored Solutions
                for Everyone</h2>

            <div className='relative'>
                <Lottie animationData={whyAnimation} className='mx-auto w-[80%]' />

                <div className='absolute top-0'>
                    <h4> For Individuals </h4>
                    <p>Tracking spending, set saving goals, and enjoy fee-free transactions.</p>
                </div>
            </div>


        </section>
    )
}
