import { MailOutline, CallOutline } from 'react-ionicons'
import PrimaryBtn from '../PrimaryBtn'
import SecondaryBtn from '../SecondaryBtn'
import dash from '../../../public/images/test.jpeg'


export default function Contact() {
    return (
        <section className='max-w-container h-full'>
            <div className='relative overflow-hidden rounded-2xl '>
                <div className='absolute inset-0 z-0'>
                    <img src={dash} alt="" className='object-center mix-blend-darken' />
                </div>

                <div className='w-full hero h-[80vh] flex flex-col justify-center items-center shadow-custom relative z-10'>
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
            </div>
        </section>
    )
}
