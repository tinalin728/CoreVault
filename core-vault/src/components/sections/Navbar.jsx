import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import { AddOutline } from 'react-ionicons';

import fullLogo from '../../../public/images/white-logo.svg'
import logo from '../../../public/images/logo.svg'

export default function Navbar({ isDark }) {

    const [isOpen, SetIsOpen] = useState(false);
    const textRef = useRef(null)
    const navRef = useRef(null)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)
    const logoRef = useRef(null)

    const toggleMenu = () => {
        SetIsOpen((prev) => !prev);
        console.log('istoggled')
    }


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

    useGSAP(() => {
        gsap.to(logoRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: logoRef.current,
                start: "top+=50 top",
                end: "top+=300 top",
                scrub: true,
            },
        });
    }, []);



    return (
        <>
            <header className='max-w-container py-6 fixed top-10 z-[999] left-1/2 -translate-x-1/2'>
                <div className='flex justify-between items-center px-6 md:px-0'>
                    <div ref={logoRef} className='font-awaken text-xl'>
                        <img src={fullLogo} alt="logo with name" width={180} className='hidden md:block' />
                        <img src={logo} alt="logo" width={40} className='md:hidden' />
                    </div>

                    <div className='relative'>
                        <div
                            ref={buttonRef}
                            onClick={toggleMenu}
                            className={`cursor-pointer flex items-center justify-center gap-2 bg-opacity-40 backdrop-blur-sm px-4 py-2 relative transition ease duration-500  ${isDark ? 'bg-black' : 'bg-white'}`}
                        >

                            <span ref={textRef} className="text-md md:text-lg lg:text-xl uppercase font-medium tracking-wider text-white z-[1000] leading-normal">
                                {isOpen ? 'Close' : 'More'}
                            </span>
                            <AddOutline height="23px" width="23px" color='white' className={`transition-transform duration-500 ease-in-out transform mb-1 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                            />
                        </div>


                        <nav ref={navRef} className={`bg-white bg-opacity-20 backdrop-blur-sm shadow-md absolute top-full right-0 w-full rounded-b-lg z-[1000] overflow-hidden`} >
                            <ul ref={menuRef} className='flex flex-col cursor-pointer z-[1000]'>
                                <li onClick={toggleMenu} className='py-4 hover:bg-nude-white transition duration-300 text-center'>
                                    <a href="#feature">Features</a>
                                </li>
                                <li onClick={toggleMenu} className='text-center py-4 hover:bg-nude-white transition duration-300'>
                                    <a href="#why">Why Us?</a>
                                </li>
                                <li onClick={toggleMenu} className='text-center py-4 hover:bg-nude-white transition duration-300'>
                                    <a href="#start">Get Started</a>
                                </li>
                                <li onClick={toggleMenu} className='text-center py-4 hover:bg-nude-white transition duration-300'>
                                    <a href="#testimonial">Testimonials</a>
                                </li>
                                <li onClick={toggleMenu} className='text-center py-4 hover:bg-nude-white transition duration-300'>
                                    <a href="#faq">FAQs</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header >
        </>
    )
}
