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
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    const benefits = [
        {
            id: '1',
            title: 'Link Your Accounts',
            content: 'Connect all your accounts securely and gain a clear, consolidated view of your finances within minutes. Say goodbye to juggling multiple apps or manually entering data!',
        },
        {
            id: '2',
            title: 'Set Goals',
            content: 'Stay motivated with personalized insights designed to align with your unique financial journey. Achieve your savings goals with tailored guidance every step of the way.',
        },
        {
            id: '3',
            title: 'Manage like a Pro',
            content: 'Manage your finances effortlessly with AI-driven recommendations, saving you both time and money while empowering you to take full control like an expert.',
        },
    ];

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 10%',
            //markers: true,
            onEnter: () => {
                cardRefs.current.forEach((card, index) => {
                    setTimeout(() => {
                        setFlip((prevState) => {
                            const newState = [...prevState];
                            newState[index] = true;
                            return newState;
                        });
                    }, index * 300);
                });
            },
            onLeaveBack: () => {
                cardRefs.current.forEach((card, index) => {
                    setTimeout(() => {
                        setFlip((prevState) => {
                            const newState = [...prevState];
                            newState[index] = false;
                            return newState;
                        });
                    }, index * 300);
                });
            },
        });
    });

    return (
        <section ref={sectionRef} id="start" className="max-w-container relative h-full pt-[10rem]">
            <div>
                <Tag text="Core Benefits" />
                <h2 className="text-center mt-4">Transform Your Finances in 3 Easy Steps</h2>
                <div className="my-20">
                    <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row md:flex-wrap md:gap-12 lg:gap-20">
                        {benefits.map((item, index) => (
                            <ReactCardFlip
                                key={item.id}
                                isFlipped={flip[index]}
                                flipDirection="horizontal"
                                containerClassName="[perspective:800px]"
                            >
                                {/* Front Side */}
                                <div
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    className="group min-h-[350px] max-w-[340px] flex flex-col justify-center items-center gap-6 flex-1 shadow-glow rounded-xl relative  py-14 px-6 overflow-hidden bg-gradient-to-tr from-light-purple to-light-peach"
                                >
                                    <div className='absolute inset-0  w-full h-full flex justify-center items-center z-10'>
                                        <img src={logo} alt="Logo" width={70} className="mix-blend-soft-light" />
                                    </div>

                                    <div className="h-14 w-14 border border-white bg-nude-white flex justify-center items-center rounded-full shadow-custom z-0 opacity-0">
                                        <span className="font-awaken text-2xl leading-none">{item.id}</span>
                                    </div>
                                    <div className="text-center pt-4 z-0 opacity-0">
                                        <h4 className="uppercase font-medium tracking-wider">{item.title}</h4>
                                        <p className="mt-4 text-gray-700">{item.content}</p>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div
                                    className=" min-h-[350px] max-w-[340px] flex flex-col justify-center items-center gap-6 flex-1 shadow-glow rounded-xl py-14 px-6 cursor-pointer"
                                    onMouseEnter={(e) => {
                                        const boundingBox = e.currentTarget.getBoundingClientRect();
                                        const x = e.clientX - boundingBox.left;
                                        const y = e.clientY - boundingBox.top;
                                        const xPercentage = x / boundingBox.width;
                                        const yPercentage = y / boundingBox.height;
                                        const xRotation = (yPercentage - 0.5) * 20;
                                        const yRotation = (xPercentage - 0.5) * 20;

                                        e.currentTarget.style.setProperty('--x-rotation', `${xRotation}deg`);
                                        e.currentTarget.style.setProperty('--y-rotation', `${yRotation}deg`);
                                        e.currentTarget.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
                                    }}
                                    onMouseMove={(e) => {
                                        const boundingBox = e.currentTarget.getBoundingClientRect();
                                        const x = e.clientX - boundingBox.left;
                                        const y = e.clientY - boundingBox.top;
                                        const xPercentage = x / boundingBox.width;
                                        const yPercentage = y / boundingBox.height;
                                        const xRotation = (yPercentage - 0.5) * 20;
                                        const yRotation = (0.5 - xPercentage) * 20;

                                        e.currentTarget.style.setProperty('--x-rotation', `${xRotation}deg`);
                                        e.currentTarget.style.setProperty('--y-rotation', `${yRotation}deg`);
                                        e.currentTarget.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'rotateX(0) rotateY(0) scale(1)';
                                    }}
                                >
                                    <div className="h-14 w-14 border border-white bg-nude-white flex justify-center items-center rounded-full shadow-custom">
                                        <span className="font-awaken text-2xl leading-none">{item.id}</span>
                                    </div>
                                    <div className="text-center mt-4">
                                        <h4 className="uppercase font-medium tracking-wider">{item.title}</h4>
                                        <p className="mt-4 text-gray-700">{item.content}</p>
                                    </div>
                                </div>
                            </ReactCardFlip>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <PrimaryBtn text="Get Started Today" />
                </div>
            </div>
        </section>
    );
}
