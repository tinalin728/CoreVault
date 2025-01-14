import React, { useState, useRef, useEffect } from 'react'
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


export default function Hero({ setIsNavDark }) {
    const [isOpen, SetIsOpen] = useState(false);
    const heroRef = useRef(null);
    const heroInner = useRef(null)
    const textRef = useRef(null)
    const navRef = useRef(null)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    const toggleMenu = () => {
        SetIsOpen((prev) => !prev);
        console.log('istoggled')
    }

    useGSAP(() => {
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

    useGSAP(() => {
        const animation = gsap.timeline();
        animation.to(textRef.current, {
            y: -10,
            opacity: 0,
            duration: .5,
            ease: 'power2.out',
        });

        animation.set(textRef.current, {
            y: 10,
            opacity: 0,
            // innerText: isOpen ? 'Close' : 'More'
        });
        animation.to(textRef.current, {
            y: 0,
            opacity: 1,
            duration: .3,
            ease: 'power2.out',
        })
    }, [isOpen])

    useEffect(() => {
        if (isOpen) {
            gsap.to(buttonRef.current, {
                borderRadius: "1rem 1rem 0 0", // Matches `rounded-t-lg`
                duration: 0.5,
                ease: "power2.out",
            });

            // Animate the background and menu items
            gsap.fromTo(
                navRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.8, ease: "power2.out" }
            );

            gsap.fromTo(
                menuRef.current.children, // Target menu items
                { opacity: 0, y: -40 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }
            );
        } else {
            // Reverse animation for closing
            gsap.to(navRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
            });
            {
                gsap.to(buttonRef.current, {
                    borderRadius: "9999px", // Matches `rounded-full`
                    duration: 0.5,
                    ease: "power2.in",
                });
            }
        }
    }, [isOpen]);

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
            <div ref={heroRef} className='p-6 md:p-8 h-screen'>
                <div ref={heroInner} className='hero h-full w-full rounded-3xl flex flex-col shadow-custom'>
                    <section className='max-w-container h-full flex justify-between items-center mt-20'>
                        <div className='md:basis-2/3'>
                            <div className=''>
                                <h1 className='text-white'>
                                    One Platform for smarter money management
                                </h1>

                                <p className='text-white my-8 md:mt-8 md:my-20'>
                                    The best of banking and technology to streamline your finances. Full control at your fingertips.
                                </p>
                                <div className='inline-flex flex-col gap-4 md:flex-row'>
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
                            <Lottie animationData={heroAnimation} style={{ width: '100%', opacity: '50%', objectFit: 'cover', zIndex: '1' }} />
                            <Lottie animationData={expense} style={{ width: '100%', opacity: '50%', objectFit: 'cover', marginTop: '-40px', zIndex: '1' }} />

                        </div>
                    </section>
                </div >
            </div >
        </>
    )
}
