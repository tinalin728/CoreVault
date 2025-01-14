import React from 'react';
import { LogoInstagram, LogoFacebook, LogoLinkedin } from 'react-ionicons';

export default function Footer() {
    return (
        <footer className='max-w-container py-20'>
            <div className='flex justify-between items-center border-t border-purple pt-4'>
                <div className='flex gap-4'>
                    <span>2025 CoreVault Inc</span>
                    <ul className='flex gap-4'>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                    </ul>
                </div>

                <ul className='flex gap-4'>
                    <li><a href="#"><LogoInstagram color={'#6b7280'} height="30px" width="30px" /></a></li>
                    <li><a href="#">
                        <LogoFacebook height="30px" width="30px" />
                    </a></li>
                    <li><a href="#">
                        <LogoLinkedin height="30px" width="30px" />
                    </a></li>
                </ul>
            </div>


        </footer>
    );
}
