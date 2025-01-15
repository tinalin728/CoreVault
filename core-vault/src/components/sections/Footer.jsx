import React from 'react';
import { LogoInstagram, LogoFacebook, LogoLinkedin, MailOutline } from 'react-ionicons';

export default function Footer() {
    return (
        <footer className='max-w-container py-20'>
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
                        <MailOutline color={'#8284B7'} height="30px" width="30px" />
                    </a></li>
                    <li><a href="#"><LogoInstagram color={'#8284B7'} height="30px" width="30px" /></a></li>
                    <li><a href="#">
                        <LogoFacebook color={'#8284B7'} height="30px" width="30px" />
                    </a></li>
                    <li><a href="#">
                        <LogoLinkedin color={'#8284B7'} height="30px" width="30px" />
                    </a></li>
                </ul>
            </div>
        </footer>
    );
}
