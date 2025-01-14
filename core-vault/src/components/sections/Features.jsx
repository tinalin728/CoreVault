import React from 'react'
import Tag from '../Tag'
import dashboard from '../../../public/images/dashboard.png'
import account from '../../../public/images/account.svg'
import ai from '../../../public/images/ai.svg'
import payment from '../../../public/images/payment.svg'
import currency from '../../../public/images/currency.svg'

export default function Features() {

    const FeatureCard = ({ header, content, src }) => {
        return (
            <div>
                <div className='flex flex-col justify-center gap-4 items-center lg:flex-row lg:justify-start'>
                    <img src={src} alt="" width={60} />
                    <div>
                        <h4 className='font-bold uppercase tracking-wider text-center lg:text-left'>{header}</h4>
                    </div>
                </div>
                <p className='md:pl-[4.70rem]'>{content}</p>
            </div>
        )
    }


    return (
        <>
            <section id='feature' className='pt-[10rem] max-w-container relative'>
                <Tag text='Core features'
                />

                <h2 className='text-center mt-4'>Everything You Need, <br />
                    in One Platform </h2>

                <div className='flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between lg:gap-16'>
                    <div className='basis-[55%] w-full'>
                        <img src={dashboard} alt="" />
                    </div>

                    <div className='basis-[45%] flex flex-col gap-14 rounded-xl shadow-custom p-10 lg:p-14'>
                        <FeatureCard
                            src={account}
                            header='Account management'
                            content='Monitor all your accounts in real-time, from balances to transactions, in one intuitive dashboard.'
                        />
                        <FeatureCard
                            src={payment}
                            header='Smart Payments'
                            content='Send and receive payments instantly, with support for global transfers and recurring payments.'
                        />
                        <FeatureCard
                            src={ai}
                            header='AI-powered insights'
                            content='Get personalized financial recommendations and detailed reports to optimize your spending and saving.'
                        />
                        <FeatureCard
                            src={currency}
                            header='Multi-currency support'
                            content='Manage transactions and accounts across multiple currencies with ease.'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
