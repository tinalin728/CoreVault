import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import IonIcon from '@reacticons/ionicons';
import PrimaryBtn from '../PrimaryBtn'
import SecondaryBtn from '../SecondaryBtn'
import footerImg from '../../../public/images/test2.png'


export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(
                footerRef.current, {
                padding: '0rem',
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 1.2,
                    toggleActions: 'play complete play complete',
                }
            });

            gsap.to(
                '.inner-container',
                {
                    borderRadius: '0rem',
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 50%',
                        end: 'bottom bottom',
                        scrub: 1.2,
                        toggleActions: 'play none none reverse',
                    }
                });

            gsap.fromTo(
                '.footer-text', { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 20%',
                        toggleActions: 'play none none reverse',
                    }
                }
            )

        }, footerRef);


        return () => {
            ctx.revert();
        };

    }, [])
    useGSAP(() => {
        ScrollTrigger.refresh(); // Manually force GSAP to recalculate trigger points
    });


    return (
        <>
            <footer ref={footerRef} className='h-screen p-4 md:p-8 '>
                <div className='inner-container hero h-full relative flex flex-col overflow-hidden rounded-3xl'>
                    <div className='footer-img absolute inset-0 z-0 mix-blend-color-burn opacity-15'>
                        <img src={footerImg} alt="footer" className='object-center' />
                    </div>

                    <div className='footer-text basis-[90%] w-full flex flex-col justify-center items-center relative z-10'>
                        <h1 className='text-white max-w-[50rem] text-center px-4'>Start Managing Your Accounts with Ease</h1>
                        <div className='flex gap-4 mt-10 w-fit flex-col md:flex-row'>
                            <PrimaryBtn
                                text='Get Started Now'
                            />
                            <SecondaryBtn
                                text='Request a Demo'
                            />
                        </div>
                    </div>

                    <div className='basis-[10%] relative z-10 max-w-container'>
                        <div className='flex flex-col-reverse justify-between items-center border-t border-gray-300 border-dashed border-opacity-40 pt-4 pb-2 lg:flex-row'>
                            <div className='flex flex-col gap-2 mb-2'>
                                <ul className='flex gap-4'>
                                    <li><a href="#" className='text-white mr-4 hover:text-gray-300 transition-all duration-300'>Privacy Policy </a></li>
                                    <li><a href="#" className='text-white hover:text-gray-300 transition-all duration-300'>Terms of Use</a></li>
                                </ul>
                                <p className='text-gray-200 text-[14px] tracking-wider'>All CopyRight Reserved.  CoreVault Inc.</p>
                            </div>

                            <ul className='flex gap-4 my-2'>
                                <li><a href="#">
                                    <IonIcon name="mail-outline" className='border border-nude-white border-opacity-20 bg-white bg-opacity-20 text-3xl text-white p-3 rounded-full shadow-custom-btn hover:shadow-custom-hover' />
                                </a></li>
                                <li><a href="#">
                                    <IonIcon name="logo-instagram" className='bg-white bg-opacity-10 text-3xl text-white  p-3 rounded-full  shadow-custom-btn' />
                                </a></li>
                                <li><a href="#">
                                    <IonIcon name="logo-facebook" className='bg-white bg-opacity-10 text-3xl text-white   p-3 rounded-full  shadow-custom-btn' />
                                </a></li>
                                <li><a href="#">
                                    <IonIcon name="logo-linkedin" className='bg-white bg-opacity-10 text-3xl text-white   p-3 rounded-full  shadow-custom-btn' />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
