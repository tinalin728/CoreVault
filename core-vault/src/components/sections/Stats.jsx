import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
    const statsRef = useRef(null);
    const itemsRef = useRef([]);
    const [animateCount, setAnimateCount] = useState(false);

    const statsData = [
        { end: 200, suffix: 'K +', text: 'Customer Secured with Us' },
        { end: 55, suffix: '%', text: 'Year-Over-Year Growth' },
        { end: 95, suffix: '%', text: 'Customers rated Satisfaction' },
        { end: 3, suffix: 'X', text: 'Company Expansion in 2 Years' },
    ]

    useEffect(() => {
        ScrollTrigger.create({
            trigger: statsRef.current,
            start: "top 70%",
            end: "top 50%",
            onEnter: () => {
                setAnimateCount(true);
                itemsRef.current.forEach((item) => {
                    gsap.to(item, {
                        boxShadow: 'inset 4px 3px 10px rgba(0, 0, 0, 0.1)',
                        duration: 0.6,
                        ease: 'power2.out',
                    });
                });
            },
        });
    }, []);


    return (
        <section ref={statsRef} className="max-w-container pt-[10rem]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (itemsRef.current[index] = el)}
                        className="py-16 rounded-xl flex flex-col justify-center items-center border text-center">
                        <h3 className="font-awaken">
                            {animateCount && <CountUp start={0} end={item.end} duration={3} suffix={item.suffix} />}
                        </h3>
                        <p className="pt-2 max-w-[180px] mx-auto">{item.text}</p>
                    </div>
                ))}

            </div>
        </section>
    );
}

