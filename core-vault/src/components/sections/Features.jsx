import React, { useRef, useEffect, useState } from 'react'
import Tag from '../Tag'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);
import Lottie from "lottie-react";

import bank from '../../../public/images/bank.png'
import bank2 from '../../../public/images/bank2.png'
import bank3 from '../../../public/images/bank3.png'
import money from '../../../public/images/money.svg'
import ellipse from '../../../public/images/ellipse.svg'
import payment from '../../../public/images/payment.svg'
import blackCard from '../../../public/images/black_card.svg'
import purpleCard from '../../../public/images/purple_card.svg'
import phone from '../../../public/images/phone.svg'
import complete from '../../../public/images/complete.svg'
import insight from '../../data/insight.json'
import currency from '../../data/currency.json'

export default function Features() {

    const containerRef = useRef(null);
    const bankContainerRef = useRef(null);
    const lottieRef = useRef(null);
    const [playAnimation, setPlayAnimation] = useState(false);

    useGSAP(() => {
        const images = containerRef.current.querySelectorAll('.bank');

        gsap.fromTo(
            images,
            {
                x: 0,
                y: 0,
            },
            {
                x: (index) => `${(index - 1) * 80}px`,
                y: (index) => `${index * 20}px`,
                duration: 1,
                ease: 'power2.out',
                // stagger: 0.2,
                scrollTrigger: {
                    trigger: bankContainerRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
        gsap.fromTo(
            '.account-text',
            {
                opacity: 0,
                y: 80,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: bankContainerRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none reverse',
                },
            }
        );


    }, [bankContainerRef.current]);

    const interactivity = {
        mode: "scroll",
        actions: [
            {
                visibility: [0, 0.2],
                type: "stop",
                frames: [1],
            },
            {
                visibility: [0.45, 1.0],
                type: "loop",
                frames: [0, 280],
            },
        ],
    };

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.payment-container',
                start: 'top 80%',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
            },
        })
            .fromTo(
                '.purple-card',
                { rotate: 0, x: 0 },
                { rotate: -50, duration: .5, x: -60 }
            )
            .fromTo(
                '.black-card',
                { rotate: 0, x: 0 },
                { rotate: 50, duration: .5, x: 60 }
            )
            .fromTo(
                '.complete',
                { opacity: 0, scale: .5 },
                { opacity: 1, scale: 1, duration: .5 },
            )

        gsap.fromTo(
            '.payment-text',
            {
                opacity: 0,
                y: 80,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.payment-container',
                    start: 'top 60%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    })

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.ai-container',
                start: 'top 60%',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
            },
        })
            .add([
                gsap.fromTo(
                    '.ai-img',
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, duration: 1, scale: 1 }
                ),
                gsap.fromTo(
                    '.ai-text',
                    { opacity: 0, y: 80 },
                    { opacity: 1, duration: 0.5, y: 0 }
                )
            ]);
    })
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.currency-container',
                start: 'top 60%',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
            },
        })
            .add([
                gsap.fromTo(
                    '.currency-img',
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, duration: 1, scale: 1 }
                ),
                gsap.fromTo(
                    '.currency-text',
                    { opacity: 0, y: 80 },
                    { opacity: 1, duration: 0.5, y: 0 }
                )
            ]);
    })

    return (
        <>
            <section id='feature' className='h-full  py-[5rem] md:py-[10rem]'>
                <Tag text='Core features' classes='mx-auto text-bright-blue' />

                <div className="text-center mt-2 max-w-container">
                    {['Everything You Need,', 'in One Platform'].map((text, index) => (
                        <h2 key={index}>
                            {text}
                        </h2>
                    ))}
                </div>

                <div
                    ref={containerRef}
                    className="max-w-container grid lg:grid-cols-12 gap-10 mt-10"
                >
                    <div className="w-full bg-light-blue bg-opacity-40 shadow-feature rounded-3xl min-h-[400px] h-full lg:col-span-6">
                        <div className='flex flex-col justify-center items-center h-full px-10 py-20'>
                            <div ref={bankContainerRef} className='flex justify-center items-center relative w-full min-h-[15rem] h-full -mt-8'>
                                <img src={bank} alt="" className='absolute bank max-w-[120px] md:max-w-[150px]' />
                                <img src={bank2} alt="" className='absolute bank max-w-[120px] md:max-w-[150px]' />
                                <img src={bank3} alt="" className='absolute bank max-w-[120px] md:max-w-[150px]' />
                            </div>
                            <div className='account-text mt-10 text-center'>
                                <h3 className='font-medium '>Account management</h3>
                                <p className='max-w-[30rem] mt-4 '>Monitor all your accounts in real-time, from balances to transactions, in one intuitive dashboard.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-light-blue bg-opacity-40 shadow-feature rounded-3xl min-h-[400px] h-full lg:col-span-6 relative overflow-hidden">
                        <div className='flex flex-col justify-center items-center gap-10 h-full px-10 py-16 relative z-10'>
                            <div className='payment-container flex justify-center items-center h-full relative z-10'>
                                <img src={phone} alt="" width={100} className='phone relative z-10' />
                                <img src={blackCard} alt="" width={80} className='black-card absolute z-0' />
                                <img src={purpleCard} alt="" width={80} className='purple-card absolute' />
                                <img src={complete} alt="" width={80} className='complete absolute z-10' />
                            </div>

                            <div className='payment-text'>
                                <h3 className='font-medium text-center'>Smart Payments</h3>
                                <p className='max-w-[30rem] text-center mt-4'>Send and receive payments instantly, with support for global transfers and recurring payments.</p>
                            </div>
                        </div>
                    </div>

                    <div className="ai-container w-full bg-light-blue bg-opacity-40 shadow-feature min-h-[400px] rounded-3xl lg:col-span-8 h-full">
                        <div className='flex flex-col-reverse justify-center items-center h-full p-10 lg:flex-row lg:justify-end'>
                            <div className='ai-text flex-1 text-center lg:text-left'>
                                <h3 className='font-medium'>AI-powered insights</h3>
                                <p className='max-w-[25rem] mt-4 lg:max-w-[22rem]'>Get personalized financial recommendations and detailed reports to optimize your spending and saving.</p>
                            </div>
                            <div className='flex-1 flex justify-center'>
                                <Lottie
                                    className='ai-img w-[80%] md:w-full'
                                    ref={lottieRef}
                                    animationData={insight}
                                    loop
                                    autoplay
                                    interactivity={interactivity}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="currency-container w-full bg-light-blue bg-opacity-40 shadow-feature  min-h-[400px] rounded-3xl lg:col-span-4">
                        <div className='flex flex-col justify-center items-center gap-4 h-full p-10'>
                            <div className='flex justify-center items-center'>
                                <Lottie
                                    className='currency-img w-[50%]'
                                    ref={lottieRef}
                                    animationData={currency}
                                    loop
                                    autoplay
                                // style={{ width: '60%' }}
                                />
                            </div>
                            <div className='text-center currency-text'>
                                <h3 className='font-medium'>Multi-currency support</h3>
                                <p className='max-w-[30rem] mt-4'>Manage transactions and accounts across multiple currencies with ease.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
