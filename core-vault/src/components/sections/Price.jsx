import React, { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Tag from "../Tag";
import IonIcon from "@reacticons/ionicons";
import PrimaryBtn from "../PrimaryBtn";
import SecondaryBtn from "../SecondaryBtn";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Price() {
    const [isYearly, setIsYearly] = useState(false);
    const planRefs = useRef([])
    const { ref, inView } = useInView({
        threshold: 0.20,
        triggerOnce: false,
    });

    const pricingPlans = [
        {
            id: "1",
            type: "Basic",
            monthlyPrice: 15,
            yearlyPrice: 150,
            description: "Best for individuals managing personal finances on a budget.",
            btnType: "secondary",
            btnText: 'Sign up now',
            features: [
                "Account Management Tools",
                "Expense tracking",
                "Limited analytics reports (e.g., last 3 months)",
                "Email support only",
            ],
            style: " bg-gradient-to-b from-white/30 to-blue/30 backdrop-blur-sm  shadow-custom-btn",
        },
        {
            id: "2",
            type: "Pro",
            monthlyPrice: 35,
            yearlyPrice: 350,
            description: "Best for professionals and small business owners looking for advanced insights.",
            btnType: "primary",
            btnText: 'Start free trial',
            features: [
                "All Basic Plan features",
                "Advanced analytics with AI insights",
                "Multi-currency support",
                "Priority customer support (email & chat)",
                "Custom financial goal setting",
            ],
            style: "bg-white bg-opacity-30 shadow-card-glow",
            badge: isYearly ? "Best Saving" : "Most Popular",
        },
        {
            id: "3",
            type: "Business",
            monthlyPrice: '99+',
            yearlyPrice: 990,
            description: "Best for growing businesses and teams needing robust financial tools.",
            btnType: "secondary",
            btnText: 'Contact Sales',
            features: [
                "All Pro Plan features",
                "Team account management",
                "Dedicated account manager",
                "Smart payroll tools",
                "Advanced multi-user permissions",
            ],
            style: "shadow-custom-btn bg-gradient-to-b from-white/30 to-blue/30 backdrop-blur-sm ",
        },
    ];

    useGSAP(() => {
        gsap.fromTo(
            planRefs.current, { opacity: 0, y: 80 },
            {
                opacity: 1,
                y: 1,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#price',
                    start: 'top 20%',
                    toggleActions: "play none none reverse",
                }
            }
        );
    }, [])

    return (
        <section
            id='price'
            ref={ref}
            className={`h-full py-[5rem] md:py-[10rem] transition-all duration-500 ${inView ? "bg-accent" : "bg-blue bg-opacity-10"}`}
        >
            <div className="max-w-container">
                <div>
                    <Tag text="Deals" classes="mx-auto" />
                    <h2 className={`text-center mt-2 ${inView ? 'text-white' : 'text-accent'}`}>Pricing That Works for You</h2>

                    <div className="flex justify-center items-center mt-6 bg-white bg-opacity-30 w-fit mx-auto rounded-full p-[7px] relative z-[99] shadow-custom-btn cursor-pointer">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-4 py-2 rounded-full text-base tracking-wider font-medium transition-all duration-300 cursor-pointer ${!isYearly ? "bg-blue text-white shadow-custom-hover" : "text-gray-300"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-4 py-2 rounded-full  text-base tracking-wider font-medium transition-all duration-300 cursor-pointer ${isYearly ? "bg-blue text-white shadow-custom-hover" : "text-gray-300"
                                }`}
                        >
                            Annually
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-10 items-center justify-center mt-14 md:flex-row md:flex-wrap">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            ref={(el) => (planRefs.current[index] = el)}
                            className={`${plan.style} w-fit px-5 py-6 rounded-2xl max-w-[25rem]`}
                        >
                            <div className="flex justify-between">
                                <p className="mb-8 text-gray-300 font-awaken tracking-wider uppercase">{plan.type}</p>
                                {plan.badge && (
                                    <p className="mb-8 px-3 py-1 rounded-full bg-white bg-opacity-40 text-white text-base font-medium tracking-wider">
                                        {plan.badge}
                                    </p>
                                )}
                            </div>
                            <p className="mb-8 text-gray-300">
                                <span className="text-5xl font-medium text-white">
                                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                                </span>
                                / {isYearly ? "year" : "month"}
                            </p>
                            <p className="text-gray-300 mb-6">{plan.description}</p>
                            {plan.btnType === "primary" ? (
                                <PrimaryBtn text={plan.btnText} />
                            ) : (
                                <SecondaryBtn text={plan.btnText} />
                            )}

                            <div className="mt-10 mb-4 flex gap-4 justify-center items-center">
                                <div className="w-full h-[1px] bg-gray-400 bg-opacity-40"></div>
                                <p className="uppercase tracking-widest text-[14px] text-gray-300">
                                    Features
                                </p>
                                <div className="w-full h-[1px] bg-gray-400 bg-opacity-40"></div>
                            </div>
                            <div className="flex flex-col gap-3">
                                {plan.features.map((feature, featureIndex) => (
                                    <div
                                        key={featureIndex}
                                        className="flex gap-2 items-center"
                                    >
                                        <IonIcon
                                            name="checkmark-circle"
                                            className="text-2xl text-light-blue"
                                        />
                                        <p className="text-gray-300">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
