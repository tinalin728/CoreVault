import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import { AddOutline } from 'react-ionicons';
import IonIcon from '@reacticons/ionicons';


import fullLogo from '../../../public/images/white-logo.svg'
import logo from '../../../public/images/logo.svg'
import PrimaryBtn from '../PrimaryBtn';

export default function Navbar({ isDark, heroRef }) {

    const [isOpen, SetIsOpen] = useState(false);
    const textRef = useRef(null)
    const navRef = useRef(null)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)
    const logoRef = useRef(null)

    const handleScroll = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const toggleMenu = (closeMenu = false) => {
        SetIsOpen((prev) => (closeMenu ? false : !prev));
    }

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Initialize button and nav
            gsap.set(navRef.current, {
                height: 0,
                opacity: 0,
            });

            gsap.set(buttonRef.current, {
                borderRadius: '9999px',
            });

            // Logo animation
            gsap.to(logoRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: logoRef.current,
                    start: "top+=50 top",
                    scrub: true,
                },
            });
        }, navRef); // Scope to `navRef`

        return () => ctx.revert();
    }, [isOpen]);


    useGSAP(() => {
        let ctx = gsap.context(() => {
            if (isOpen) {
                // Open menu animations
                gsap.to(buttonRef.current, {
                    borderRadius: "1rem 1rem 0 0",
                    duration: 0.5,
                    ease: "power2.out",
                });

                gsap.to(navRef.current, {
                    height: "auto",
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                });

                gsap.fromTo(
                    menuRef.current.children,
                    { opacity: 0, y: -40 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.1 }
                );
            } else {
                // Close menu animations
                gsap.to(navRef.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.in",
                });

                gsap.to(buttonRef.current, {
                    borderRadius: "9999px",
                    duration: 0.5,
                    ease: "power2.in",
                });
            }
        }, navRef);

        gsap.to(logoRef.current, {
            opacity: 0,
            y: -80,
            duration: .8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: document.body,
                start: "top+=100vh top",
                toggleActions: "play none none reverse",
            },
        });

        gsap.to('.header', {
            padding: '0',
            duration: .5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: document.body,
                start: "top+=100vh top",
                toggleActions: "play none none reverse",
            },
        })

        return () => ctx.revert();

    }, [isOpen]);

    return (
        <>
            <header className='max-w-container fixed top-10 z-[98] left-1/2 -translate-x-1/2'>
                <div className='header flex justify-between items-center px-2 py-4'>
                    <div ref={logoRef} className='font-awaken text-xl'>
                        <img src={fullLogo} alt="logo with name" width={180} className='hidden md:block' />
                        <img src={logo} alt="logo" width={40} className='md:hidden' />
                    </div>

                    <div className='relative'>
                        <div
                            ref={buttonRef}
                            onClick={() => toggleMenu()}
                            className={`cursor-pointer flex items-center justify-center gap-2 bg-opacity-40 backdrop-blur-sm px-4 py-2 relative transition ease duration-500 overflow-hidden shadow-custom-btn  hover:shadow-custom-hover ${isDark ? 'bg-black text-white' : 'bg-white text-white'}`}>

                            <span ref={textRef} className="text-md md:text-lg lg:text-xl uppercase font-medium tracking-wider z-[1000] leading-normal">
                                {isOpen ? 'Close' : 'Open'}
                            </span>
                            <IonIcon name='add-outline'
                                style={{
                                    color: isDark ? 'white' : 'white',
                                    transition: 'color 0.5s ease, transform 0.5s ease',
                                }}
                                className={`text-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                            />
                        </div>


                        <nav ref={navRef} className={`bg-white bg-opacity-20 backdrop-blur-sm absolute top-full right-0 w-full rounded-b-2xl z-[1000] overflow-hidden shadow-custom-btn`} >
                            <ul ref={menuRef} className='flex flex-col cursor-pointer z-[1000]'>
                                <li onClick={(e) => { handleScroll(e, 'feature'); toggleMenu(true) }} className='py-4 hover:bg-light-blue hover:bg-opacity-40 hover:shadow-custom-hover transition duration-300 text-center overflow-hidden'>
                                    <a href="#feature">Features</a>
                                </li>
                                <li onClick={(e) => { handleScroll(e, 'price'); toggleMenu(true) }} className='py-4 hover:bg-light-blue hover:bg-opacity-40 hover:shadow-custom-hover transition duration-300 text-center'>
                                    <a href="#price">Pricing</a>
                                </li>
                                <li onClick={(e) => { handleScroll(e, 'testimonial'); toggleMenu(true) }} className='text-center py-4 hover:bg-light-blue hover:bg-opacity-40 hover:shadow-custom-hover transition duration-300'>
                                    <a href="#testimonial">Testimonials</a>
                                </li>
                                <li onClick={(e) => { handleScroll(e, 'faq'); toggleMenu(true) }} className='text-center py-4 hover:bg-light-blue hover:bg-opacity-40 hover:shadow-custom-hover transition duration-300'>
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
