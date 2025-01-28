import React, { useState, useRef, useEffect, forwardRef } from 'react'
import PrimaryBtn from '../PrimaryBtn';
import SecondaryBtn from '../SecondaryBtn';
import Lottie from "lottie-react";
import heroAnimation from '../../data/heroAnimation.json'
import expense from '../../data/expense.json'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Hero({ setIsNavDark, heroRef }) {
    const heroInner = useRef(null)

    useGSAP(() => {
        if (!heroRef?.current) return;

        gsap.to(heroRef.current, {
            padding: '0rem',
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: '+=300',
                scrub: true,
            },
        });

        gsap.to(heroInner.current, {
            borderRadius: '0px',
            duration: .6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: '+=300',
                scrub: true,
            }
        });
    }, []);
    useEffect(() => {
        ScrollTrigger.create({
            trigger: heroRef.current,
            start: "top top",
            end: "bottom-=10% top",
            onLeave: () => setIsNavDark(true),
            onEnterBack: () => setIsNavDark(false),
        })
    }, [setIsNavDark])

    return (
        <>
            <div ref={heroRef} className='p-4 md:p-6 h-screen'>
                <div ref={heroInner} className='hero h-full w-full rounded-3xl flex flex-col shadow-custom-btn'>
                    <section className='max-w-container h-full flex justify-between items-center mt-20 relative'>
                        <div className='g1 absolute radial-gradient z-10'></div>
                        <div className='md:basis-2/3'>
                            <div className=''>
                                <h1 className='text-white text-center md:text-left'>
                                    One Platform for smarter <br /> money management
                                </h1>

                                <p className='text-white lg:text-xl my-8 md:mt-4 md:mb-14 lg:mb-20 text-center md:text-left'>
                                    The best of banking and technology to streamline your finances. <br /> Full control at your fingertips.
                                </p>
                                <div className='inline-flex flex-col gap-4 mx-auto w-full md:w-fit md:flex-row'>
                                    <PrimaryBtn
                                        text='Join Now'
                                    />
                                    <SecondaryBtn
                                        text='Request a demo'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='md:basis-[35%] hidden md:block'>
                            <Lottie animationData={heroAnimation} style={{ width: '100%', mixBlendMode: 'luminosity', opacity: '70%' }} className='scale-105' />
                            <Lottie animationData={expense} style={{ width: '100%', marginTop: '-20px', mixBlendMode: 'luminosity', opacity: '70%' }} className='scale-105' />
                        </div>
                    </section>
                </div >
            </div >
        </>
    )
}
