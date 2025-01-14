import React from 'react'
import Marquee from "react-fast-marquee";
import Tag from '../Tag';


export default function Testimonial() {

    const Container = ({ content, name, company }) => {
        return (
            <div className='bg-white w-fit p-10 mr-10 rounded-xl'>
                <h4 className='w-[20rem] mb-10'>{content}</h4>
                <p className='text-gray-500'> - {name}</p>
                <p className='font-medium italic'>{company}</p>
            </div>

        )
    }

    return (
        <section id='testimonial' className='py-[8rem]'>
            <div className='py-[8rem] bg-darker-white'>
                <div className='max-w-container'>
                    <Tag
                        text='Testimonials'
                    />
                    <h2 className='text-center mt-4'>What Our Clients Are Saying</h2>
                    <Marquee
                        pauseOnHover pauseOnClick gradient gradientColor='#f3e9ee' className='mt-10'>
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
