import React, { useRef, useState } from 'react';
import Tag from '../../components/Tag.jsx'
import faqData from '../../data/data.js'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { MailOutline, CallOutline } from 'react-ionicons'
import faq from '../../../public/images/faq.png'

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Margin } from '@mui/icons-material';

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
export default function Faq() {
    const sectionRef = useRef(null); // Reference to the section
    const faqRefs = useRef([]);

    const [value, setValue] = useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    useGSAP(() => {
        if (faqRefs.current.length === 0) return;

        faqRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        end: 'bottom top',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);



    return (
        <>
            <section id='faq' className='h-full bg-gradient-to-t from-nude-white to-light-blue' ref={sectionRef}>
                <div className='max-w-container  py-[10rem] border-t border-accent border-opacity-10 border-dashed'>
                    <div className='text-center'>
                        <Tag
                            text="FAQs"
                            classes='mx-auto'
                        />
                        <h2 className='mt-2'>You Might Also Wonder...</h2>
                    </div>
                    <div className='mt-10 flex flex-col gap-2 md:flex-row lg:gap-10 items-stretch'>
                        <Box sx={{ width: '100%', typography: 'body1', flex: '1 1 0%' }}>
                            <TabContext value={value}>
                                <Box sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                }}>
                                    <TabList onChange={handleChange} aria-label="FAQs"
                                        sx={{
                                            borderRadius: '50px',
                                            padding: '4px',
                                            '& .MuiTab-root': {
                                                textTransform: 'none',
                                                borderRadius: '50px',
                                                borderColor: 'black',
                                                borderWidth: '1px',
                                                paddingX: '25px',
                                                color: '#505457',
                                                fontSize: '18px',
                                                fontFamily: 'roboto',
                                                fontWeight: 'bold',
                                                transition: 'all 0.3s ease',
                                                marginRight: '20px',
                                                backgroundColor: '#f5f5f5',
                                                boxShadow: '3px 3px 2px rgba(0,0,0,0.1),inset 2px 3px 4px rgba(255,255,255,0.5)',
                                                overflow: 'visible',
                                                transitionProperty: 'all',
                                                transitionDuration: '500ms'
                                            },
                                            '& .Mui-selected': {
                                                color: '#000000 !important',
                                                border: '#f3e9ee',
                                                borderWidth: '2px',
                                                boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.1), inset -3px -3px 3px rgba(243,233,238,0.5)'
                                            },
                                            '& .MuiTabs-indicator': {
                                                display: 'none',
                                            },
                                            '& .MuiTabs-fixed': {
                                                overflow: 'visible',
                                            },
                                            '& .MuiTab-root:hover': {
                                                boxShadow: 'inset 1px 1px 6px rgba(0,0,0,0.1), inset -1px -1px 3px rgba(243,233,238,0.5)',
                                                transform: 'translate(.5px, .5px)',
                                                transitionDuration: '300ms'
                                            }

                                        }}
                                    >
                                        {faqData.map((item, index) => (
                                            <Tab key={index} label={item.category} value={`${index}`} />
                                        ))}
                                    </TabList>
                                </Box>
                                <div className='flex gap-10 '>
                                    <div className='flex-1 pl-2'>
                                        {faqData.map((category, index) => (
                                            <TabPanel
                                                key={index} value={`${index}`}>
                                                {category.questions.map((faq) => (
                                                    <Accordion
                                                        ref={(el) => {
                                                            if (el && !faqRefs.current.includes(el)) {
                                                                faqRefs.current.push(el);
                                                            }
                                                        }}
                                                        key={faq.id}
                                                        open={open === faq.id}
                                                        icon={<Icon id={faq.id} open={open} />}
                                                        className='py-4 border rounded-xl shadow-faq px-6 my-4 bg-nude-white' >
                                                        <AccordionHeader onClick={() => handleOpen(faq.id)} className='font-roboto font-medium text-black border-0 text-xl md:text-2xl'>
                                                            {faq.question}
                                                        </AccordionHeader>
                                                        <AccordionBody
                                                            className="font-roboto font-normal text-lg"
                                                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                                                        />
                                                    </Accordion>
                                                ))}
                                            </TabPanel>
                                        ))}
                                    </div>
                                </div>
                            </TabContext>
                        </Box>

                    </div>
                </div>
            </section >

            {/* <section className='max-w-container pt-[10rem] h-[80vh]'>
                <div className='flex flex-col justify-center items-center bg-white h-full p-10 rounded-xl'>
                    <h2 className='text-center'> Unlock the Power of Smarter Money Management </h2>
                    <p className='text-center mt-10'>
                        The ultimate tool to simplify your finances and grow your business—all in one platform.
                    </p>

                    <a href=""></a>
                </div>
            </section> */}
        </>
    )
}


// <section className='max-w-container pt-[10rem] h-[80vh]'>
//     <div className='flex flex-col justify-center items-center bg-white h-full p-10 rounded-xl'>
//         <h2 className='text-center'> Unlock the Power of Smarter Money Management </h2>
//         <p className='text-center mt-10'>
//             The ultimate tool to simplify your finances and grow your business—all in one platform.
//         </p>

//         <a href=""></a>
//     </div>
// </section>

{/* <button
className={`font-bold px-8 py-3 rounded-full bg-gradient-to-tl from-darker-white
to-nude-white text-bright-purple
shadow-[3px_3px_2px_rgba(0,0,0,0.1),inset_2px_2px_0px_rgba(255,255,255,0.5)]
hover:translate-y-[1px] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]
transition-transform duration-200 ease-in-out`}
>
Jelly Button
</button> */}