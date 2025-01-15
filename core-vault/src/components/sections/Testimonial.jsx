import React from 'react'
import Marquee from "react-fast-marquee";
import Tag from '../Tag';


export default function Testimonial() {

    const Container = ({ content, name, company }) => {
        return (
            <div className='bg-white w-fit p-10 mr-10 rounded-xl'>
                <p className='w-[20rem] text-xl mb-10'>{content}</p>
                <p className='text-gray-500'> - {name}</p>
                <p className='font-medium italic'>{company}</p>
            </div>

        )
    }

    return (
        <section id='testimonial' className='py-[5rem] md:py-[10rem]'>
            <div className=''>
                <div className='max-w-container'>
                    <Tag
                        text='Testimonials'
                        classes='mx-auto'
                    />
                    <h2 className='text-center mt-4'>What Our Clients Are Saying</h2>
                    <Marquee
                        pauseOnHover pauseOnClick gradient gradientColor='#f5f5f5' className='mt-10'>
                        <Container
                            content='"CoreVault has helped me stay on top of my finances effortlessly. I love how the AI insights give me personalized tips, making it so much easier to save for my goals."'
                            name='Emily'
                            company='Teacher'
                        />
                        <Container
                            content='"As a freelancer, I need tools that work as hard as I do. CoreVault invoice automation and expense tracking have saved me hours every week."'
                            name='David'
                            company='Graphic Designer'
                        />
                        <Container
                            content='"CoreVault has streamlined our entire payroll process. The automation tools and real-time analytics give us confidence in managing team expenses efficiently."'
                            name='Marker'
                            company='Startup Founder'
                        />
                        <Container
                            content='"The multi-currency support has been a game-changer for our global transactions. It’s like having a financial expert built into our operations."'
                            name='Jessica'
                            company='E-commerce Manager'
                        />
                    </Marquee>
                </div>
            </div>
        </section>
    )
}
