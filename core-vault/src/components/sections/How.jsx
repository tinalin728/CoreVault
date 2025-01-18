import React, { useState, useRef, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Tag from '../Tag';
import PrimaryBtn from '../PrimaryBtn';
import logo from '../../../public/images/logo.svg';

export default function How() {
    const [flip, setFlip] = useState([false, false, false]);
    const howRef = useRef(null);
    const stepRefs = useRef([]);

    const cards = [
        {
            title: "Open a CoreVault account",
            content: "Sign up in minutes and gain access to personalized financial solutions tailored to your needs.",
        },
        {
            title: "Link your accounts",
            content: "Simplify expense tracking, payment management, and transfers with a few clicks.",
        },
        {
            title: "Manage like a Pro",
            content: "Leverage smart payments and multi-currency support for seamless financial management.",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = stepRefs.current;

            gsap.set(cards, { y: 200, opacity: 0, scale: 0.8 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    id: "how-section-trigger",
                    trigger: howRef.current,
                    start: "top top",
                    end: () => `+=${cards.length * 200}`,
                    scrub: true,
                    pin: true,
                },
            });

            cards.forEach((card, index) => {
                tl.to(card, {
                    y: 120 + index * -160,
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                });
            });
        }, howRef);

        return () => ctx.revert(); // Cleanup on unmount
    }, []);


    return (
        <section ref={howRef} id="start" className="relative h-full bg-gray-900 text-white">
            <div className="max-w-container flex gap-20">
                <div className="flex-1 sticky top-0 py-[5rem] md:py-[10rem] h-screen">
                    <div className="mb-5">
                        <span className="text-sm text-gray-500 uppercase">Steps</span>
                    </div>
                    <h2 className="text-4xl font-bold">
                        Transform Your Finances <br /> in Quick Steps
                    </h2>
                </div>

                <div className="flex-1 grid items-center justify-between w-full gap-8 mt-10">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            ref={(el) => (stepRefs.current[index] = el)}
                            className="flex justify-center items-center h-[200px]"
                        >
                            <div className="shadow-inner border p-10 rounded-xl bg-gray-800 w-full max-w-md">
                                <h1 className="text-gray-500">{index + 1}. </h1>
                                <h4 className="font-medium text-white">{card.title}</h4>
                                <p className="mt-2 text-white">{card.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



// useGSAP(() => {
//     ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: 'top 10%',
//         //markers: true,
//         onEnter: () => {
//             stepRefs.current.forEach((card, index) => {
//                 setTimeout(() => {
//                     setFlip((prevState) => {
//                         const newState = [...prevState];
//                         newState[index] = true;
//                         return newState;
//                     });
//                 }, index * 300);
//             });
//         },
//         onLeaveBack: () => {
//             stepRefs.current.forEach((card, index) => {
//                 setTimeout(() => {
//                     setFlip((prevState) => {
//                         const newState = [...prevState];
//                         newState[index] = false;
//                         return newState;
//                     });
//                 }, index * 300);
//             });
//         },
//     });
// });

// <div className="my-20">
// <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row md:flex-wrap md:gap-12 lg:gap-20">
//     {benefits.map((item, index) => (
//         <ReactCardFlip
//             key={item.id}
//             isFlipped={flip[index]}
//             flipDirection="horizontal"
//             containerClassName="[perspective:800px]"
//         >
//             {/* Front Side */}
//             <div
//                 ref={(el) => (stepRefs.current[index] = el)}
//                 className="group min-h-[350px] max-w-[340px] flex flex-col justify-center items-center gap-6 flex-1 shadow-glow rounded-xl relative  py-14 px-6 overflow-hidden bg-charcoal"
//             >
//                 <div className='absolute inset-0  w-full h-full flex justify-center items-center z-10'>
//                     <img src={logo} alt="Logo" width={70} className="mix-blend-overlay" />
//                 </div>

//                 <div className="h-14 w-14 border border-white bg-nude-white flex justify-center items-center rounded-full shadow-custom z-0 opacity-0">
//                     <span className="font-awaken text-2xl leading-none">{item.id}</span>
//                 </div>
//                 <div className="text-center pt-4 z-0 opacity-0">
//                     <h4 className="uppercase font-medium tracking-wider">{item.title}</h4>
//                     <p className="mt-4 text-gray-700">{item.content}</p>
//                 </div>
//             </div>

//             {/* Back Side */}
//             <div
//                 className=" min-h-[350px] max-w-[340px] flex flex-col justify-center items-center gap-6 flex-1 shadow-custom rounded-xl py-14 px-6 cursor-pointer"
//                 onMouseEnter={(e) => {
//                     const boundingBox = e.currentTarget.getBoundingClientRect();
//                     const x = e.clientX - boundingBox.left;
//                     const y = e.clientY - boundingBox.top;
//                     const xPercentage = x / boundingBox.width;
//                     const yPercentage = y / boundingBox.height;
//                     const xRotation = (yPercentage - 0.5) * 20;
//                     const yRotation = (xPercentage - 0.5) * 20;

//                     e.currentTarget.style.setProperty('--x-rotation', `${xRotation}deg`);
//                     e.currentTarget.style.setProperty('--y-rotation', `${yRotation}deg`);
//                     e.currentTarget.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
//                 }}
//                 onMouseMove={(e) => {
//                     const boundingBox = e.currentTarget.getBoundingClientRect();
//                     const x = e.clientX - boundingBox.left;
//                     const y = e.clientY - boundingBox.top;
//                     const xPercentage = x / boundingBox.width;
//                     const yPercentage = y / boundingBox.height;
//                     const xRotation = (yPercentage - 0.5) * 20;
//                     const yRotation = (0.5 - xPercentage) * 20;

//                     e.currentTarget.style.setProperty('--x-rotation', `${xRotation}deg`);
//                     e.currentTarget.style.setProperty('--y-rotation', `${yRotation}deg`);
//                     e.currentTarget.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
//                 }}
//                 onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'rotateX(0) rotateY(0) scale(1)';
//                 }}
//             >
//                 <div className="h-14 w-14 border border-white bg-nude-white flex justify-center items-center rounded-full shadow-custom">
//                     <span className="font-awaken text-2xl leading-none">{item.id}</span>
//                 </div>
//                 <div className="text-center mt-4">
//                     <h4 className="uppercase font-bold tracking-wider">{item.title}</h4>
//                     <p className="mt-4 text-gray-700">{item.content}</p>
//                 </div>
//             </div>
//         </ReactCardFlip>
//     ))}
// </div>
// </div>