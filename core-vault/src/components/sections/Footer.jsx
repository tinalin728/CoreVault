import React from 'react';
import IonIcon from '@reacticons/ionicons';

import { LogoInstagram, LogoFacebook, LogoLinkedin, MailOutline } from 'react-ionicons';

export default function Footer() {
    return (
        <footer className='max-w-container pt-20 pb-10'>
            <div className='flex justify-between items-center border-t border-gray-300 pt-4'>
                <div className='flex gap-4'>
                    <p>2025 CoreVault Inc</p>
                    <ul className='flex gap-4'>
                        <li><a href="#" className='text-gray-800'>Privacy Policy</a></li>
                        <li><a href="#" className='text-gray-800'>Terms of Use</a></li>
                    </ul>
                </div>

                <ul className='flex gap-4'>
                    <li><a href="#">
                        <IonIcon name="mail-outline" className='text-3xl text-gray-800 p-3 rounded-full border-2 shadow-custom hover:shadow-inner ' />
                    </a></li>
                    <li><a href="#">
                        <IonIcon name="logo-instagram" className='text-3xl text-gray-800 p-3 rounded-full border-2 shadow-custom hover:shadow-inner' />
                    </a></li>
                    <li><a href="#">
                        <IonIcon name="logo-facebook" className='text-3xl text-gray-800 p-3 rounded-full border-2 shadow-custom hover:shadow-inner' />
                    </a></li>
                    <li><a href="#">
                        <IonIcon name="logo-linkedin" className=' text-3xl text-gray-800 p-3 rounded-full border-2 shadow-custom hover:shadow-inner' />
                    </a></li>
                </ul>
            </div>
        </footer>
    );
}
