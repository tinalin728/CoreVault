import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
    const statsRef = useRef(null);
    const boxRef = useRef(null);
    const itemsRef = useRef([]);
    const [animateCount, setAnimateCount] = useState(false);

    const statsData = [
        { end: 200, suffix: 'K +', text: 'Customer Secured with Us' },
        { end: 55, suffix: '%', text: 'Year-Over-Year Growth' },
        { end: 95, suffix: '%', text: 'Customers rated Satisfaction' },
        { end: 3, suffix: 'X', text: 'Company Expansion in 2 Years' },
    ]


    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Create a timeline for each item
            itemsRef.current.forEach((item, index) => {
                gsap.fromTo(
                    item,
                    {
                        y: 30,
                        scale: 0.95,
                    },
                    {
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 80%',
                            end: 'top 60%',
                            scrub: true,
                            toggleActions: 'play complete none reverse',
                            onEnter: () => setAnimateCount(true),
                            onLeaveBack: () => setAnimateCount(false),
                        },
                    }
                );
            });
        }, statsRef);

        return () => {
            ctx.revert();
        };
    }, []);


    return (
        <section ref={statsRef} className="max-w-container pt-[5rem] md:pt-[10rem]">
            <div ref={boxRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 ">
                {statsData.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)}
                        className="py-16 rounded-3xl flex flex-col justify-center items-center border text-center  shadow-inner bg-nude-white">
                        <h3 className="font-awaken">
                            {animateCount && <CountUp start={1} end={item.end} duration={3} suffix={item.suffix} />}
                        </h3>
                        <p className="pt-2 max-w-[180px] mx-auto">{item.text}</p>
                    </div>
                ))}

            </div>
        </section>
    );
}

