import React, { useRef, useState } from 'react';
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



import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

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
    const iconRefs = useRef([]);

    const [value, setValue] = useState('0');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    useGSAP(() => {
        gsap.fromTo(
            iconRefs.current,
            {
                opacity: 0, // Start invisible
                y: -200, // Start above the viewport
                x: (i) => (i % 2 === 0 ? -200 : 200), // Alternate direction (left and right)
            },
            {
                opacity: 1, // Fade in
                x: 0, // Move to natural position
                y: 0, // Move to natural position
                duration: 1, // Duration of animation
                ease: "bounce.out", // Bounce effect
                stagger: 0.2, // Stagger each icon
                scrollTrigger: {
                    trigger: sectionRef.current, // Trigger when the section comes into view
                    start: "top 80%", // Start when 80% of the section is visible
                },
            }
        );
    }, []);

    return (
        <>
            <section id='faq' className='max-w-container' ref={sectionRef}>
                <h2>More Questions?</h2>
                <div className='flex flex-col gap-2 md:flex-row lg:gap-10'>

                    <Box sx={{ width: '100%', typography: 'body1', marginTop: '2rem', flex: '1 1 0%' }}>
                        <TabContext value={value}>
                            <Box>
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
                                            color: '#555',
                                            backgroundColor: '#FAF6F8',
                                            fontSize: '18px',
                                            fontFamily: 'roboto',
                                            fontWeight: 'bold',
                                            transition: 'all 0.3s ease',
                                            marginRight: '20px',
                                            boxShadow: '3px 3px 2px rgba(0,0,0,0.1),inset 2px 3px 4px rgba(255,255,255,0.5)',
                                            overflow: 'visible',
                                            transitionProperty: 'all',
                                            transitionDuration: '500ms'
                                        },
                                        '& .Mui-selected': {
                                            //backgroundColor: '#f3e9ee',
                                            color: '#555 !important',
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

                                //                 shadow-[3px_3px_2px_rgba(0,0,0,0.1),inset_2px_3px_4px_rgba(255,255,255,0.3)]
                                // hover:translate-y-[1px] hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)]
                                >
                                    {faqData.map((item, index) => (
                                        <Tab key={index} label={item.category} value={`${index}`} />
                                    ))}
                                </TabList>
                            </Box>
                            {faqData.map((category, index) => (
                                <TabPanel key={index} value={`${index}`}>
                                    {category.questions.map((faq) => (
                                        <Accordion
                                            key={faq.id}
                                            open={open === faq.id}
                                            icon={<Icon id={faq.id} open={open} />}
                                        >
                                            <AccordionHeader onClick={() => handleOpen(faq.id)} className='font-roboto'>
                                                {faq.question}
                                            </AccordionHeader>
                                            <AccordionBody className='font-roboto font-normal text-lg'>{faq.answer}</AccordionBody>
                                        </Accordion>
                                    ))}
                                </TabPanel>
                            ))}
                        </TabContext>
                    </Box>

                    <div className="flex-1 shadow-inner rounded-xl flex flex-col justify-center items-center gap-4 py-20 min-h-[450px]">
                        <div>
                            <div className='flex gap-4 items-center'>
                                <div className='p-3 rounded-full border-2 border-opacity-70 shadow-inner'>
                                    <MailOutline
                                        color={'#00000'}
                                        height="30px"
                                        width="30px"
                                    />
                                </div>
                                <p className='tracking-wider'>info@corevault.com</p>
                            </div>
                            <div className='flex gap-4 items-center mt-4'>
                                <div className='p-3 rounded-full shadow-inner'>
                                    <CallOutline
                                        color={'#00000'}
                                        height="30px"
                                        width="30px"
                                    />
                                </div>
                                <p className='tracking-wider'> (+1) 800.560.2234</p>
                            </div>
                        </div>

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