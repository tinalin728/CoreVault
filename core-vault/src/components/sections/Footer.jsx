import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import IonIcon from '@reacticons/ionicons';
import { MailOutline, CallOutline } from 'react-ionicons'
import PrimaryBtn from '../PrimaryBtn'
import SecondaryBtn from '../SecondaryBtn'
import dash from '../../../public/images/test.jpeg'
import test from '../../../public/images/test2.png'


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
                    start: 'top 50%',
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
                        toggleActions: 'play complete play complete',
                    }
                });

        }, footerRef);

        ScrollTrigger.refresh();

        return () => {
            ctx.revert();
        };

    }, [])




    return (
        <>
            <footer ref={footerRef} className='h-screen p-4 md:p-8'>
                <div className='inner-container hero h-full relative flex flex-col overflow-hidden rounded-3xl'>
                    <div className='footer-img absolute inset-0 z-0 mix-blend-color-burn opacity-15'>
                        <img src={test} alt="" className='object-center' />
                    </div>

                    <div className='basis-[90%] w-full flex flex-col justify-center items-center relative z-10'>
                        <h1 className='text-white max-w-[50rem] text-center'>Start Managing Your Accounts with Ease</h1>
                        <div className='flex gap-4 mt-10'>
                            <PrimaryBtn
                                text='Get Started Now'
                            />
                            <SecondaryBtn
                                text='Request a Demo'
                            />
                        </div>
                    </div>

                    <div className='basis-[10%] relative z-10 max-w-container'>
                        <div className='flex justify-between items-center border-t border-gray-300 border-dashed border-opacity-40 pt-4 pb-2'>
                            <div className='flex gap-4'>
                                <p className='text-gray-400'>All CopyRight Reserved. CoreVault Inc.</p>
                                <ul className='flex gap-4'>
                                    <li><a href="#" className='text-white'>Privacy Policy</a></li>
                                    <li><a href="#" className='text-white'>Terms of Use</a></li>
                                </ul>
                            </div>

                            <ul className='flex gap-4'>
                                <li><a href="#">
                                    <IonIcon name="mail-outline" className='text-3xl text-white border border-nude-white border-opacity-15 p-3 rounded-full btn-shadow' />
                                </a></li>
                                <li><a href="#">
                                    <IonIcon name="logo-instagram" className='text-3xl text-white border border-nude-white  p-3 rounded-full border-opacity-15  btn-shadow' />
                                </a></li>
                                <li><a href="#">
                                    <IonIcon name="logo-facebook" className='text-3xl text-white border border-nude-white  p-3 rounded-full border-opacity-15 btn-shadow' />
                                </a></li>
                                <li><a href="#">
                                    <IonIcon name="logo-linkedin" className=' text-3xl text-white border border-nude-white  p-3 rounded-full border-opacity-15 btn-shadow' />
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
