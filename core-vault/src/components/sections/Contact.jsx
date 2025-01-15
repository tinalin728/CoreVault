import { MailOutline, CallOutline } from 'react-ionicons'
import PrimaryBtn from '../PrimaryBtn'
import SecondaryBtn from '../SecondaryBtn'

export default function Contact() {
    return (
        <section className='max-w-container h-[80vh]'>
            <div className='hero w-full h-full flex flex-col justify-center items-center  rounded-xl shadow-custom'>
                <h1 className='text-white max-w-[50rem] text-center'>Start Managing Your Accounts with Ease</h1>
                <div className='flex gap-4 mt-10'>
                    <PrimaryBtn
                        text='Get Started Now'
                    />
                    <SecondaryBtn
                        text='Request a Demo'
                    />
                </div>
            </div>
        </section>
    )
}

{/* <div className="flex-1 border rounded-xl flex flex-col justify-center items-center gap-4 py-20 min-h-[450px] relative overflow-hidden">
            <div className='flex flex-col justify-center items-center gap-6'>
                <div>
                    <h4 className='text-center font-medium'> Call or Email </h4>
                    <p className='text-center  max-w-[23rem] px-4 py-2'>
                        Have product inquiries? Our team’s here 7 days a week to connect with you.
                    </p>

                </div>
                <div>
                    <div className='flex gap-4 items-center'>
                        <div className='p-2 rounded-full border-2 border-opacity-70 shadow-inner'>
                            <MailOutline
                                color={'#00000'}
                                height="30px"
                                width="30px"
                            />
                        </div>
                        <p className='tracking-wider'>info@corevault.com</p>
                    </div>
                    <div className='flex gap-4 items-center mt-6'>
                        <div className='p-2 rounded-full shadow-inner'>
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
        </div> */}