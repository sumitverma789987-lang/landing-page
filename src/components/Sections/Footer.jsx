import React from 'react'
import { Arrow, Facebook, Linkedin, Twitter, Whitearrow, Youtube } from '../common/Icon'

const Footer = () => {
    return (
        <div className='bg-[var(--gray)] w-full'>
            <div className='flex flex-col items-center max-w-[1440px] mx-auto w-full justify-center text-white'>
                <div className='flex flex-col md:flex-row md:items-baseline md:justify-between p-6 sm:p-8 md:p-12 lg:p-16 w-full gap-8 md:gap-12 lg:gap-16'>
                    <div className='flex flex-col items-start justify-center space-y-4 sm:space-y-5 md:space-y-6 flex-1'>
                        <p className='font-[var(--font-normal)] [font-size:var(--text-16)] md:[font-size:var(--text-18)] lg:[font-size:var(--text-20)] leading-relaxed'>Eco-friendly yoga mats that blend<br /> high performance.</p>
                        <p className='font-[var(--font-medium)] [font-size:var(--text-16)] md:[font-size:var(--text-18)] lg:[font-size:var(--text-20)]'>Follow us On:</p>
                        <div className='flex flex-row items-center gap-3 sm:gap-4 justify-start'>
                            <Youtube />
                            <Facebook />
                            <div className='flex items-center justify-center border-[1.35px] border-white rounded-full p-[8px]'>
                                <Twitter />
                            </div>
                            <Linkedin />
                        </div>
                    </div>

                    <div className='flex flex-row items-start gap-8 sm:gap-12 md:gap-16 lg:gap-20 flex-1 md:flex-none'>
                        <ul className='font-[var(--font-normal)] space-y-3 sm:space-y-4'>
                            <h4 className='font-[var(--font-medium)] [font-size:var(--text-16)] md:[font-size:var(--text-18)] lg:[font-size:var(--text-20)]'>Quick Links</h4>
                            <li className='[font-size:var(--text-14)] md:[font-size:var(--text-16)] lg:[font-size:var(--text-18)] cursor-pointer hover:text-[var(--teal)] transition-colors'>Leggings</li>
                            <li className='[font-size:var(--text-14)] md:[font-size:var(--text-16)] lg:[font-size:var(--text-18)] cursor-pointer hover:text-[var(--teal)] transition-colors'>Women's Clothing</li>
                            <li className='[font-size:var(--text-14)] md:[font-size:var(--text-16)] lg:[font-size:var(--text-18)] cursor-pointer hover:text-[var(--teal)] transition-colors'>Men's Clothing</li>
                            <li className='[font-size:var(--text-14)] md:[font-size:var(--text-16)] lg:[font-size:var(--text-18)] cursor-pointer hover:text-[var(--teal)] transition-colors'>Yoga & Pilates Equipment</li>
                            <li className='[font-size:var(--text-14)] md:[font-size:var(--text-16)] lg:[font-size:var(--text-18)] cursor-pointer hover:text-[var(--teal)] transition-colors'>Jewelry & Wellness</li>
                            <li className='[font-size:var(--text-14)] md:[font-size:var(--text-16)] lg:[font-size:var(--text-18)] cursor-pointer hover:text-[var(--teal)] transition-colors'>Accessories</li>
                            <li className='[font-size:var(--text-14)] md:[font-size:var(--text-16)] lg:[font-size:var(--text-18)] cursor-pointer hover:text-[var(--teal)] transition-colors'>Size Guide</li>
                        </ul>

                        <ul className='font-[var(--font-normal)] space-y-3 sm:space-y-4'>
                            <h4 className='font-[var(--font-medium)] [font-size:var(--text-16)] md:[font-size:var(--text-18)] lg:[font-size:var(--text-20)]'>Other Links</h4>
                            <li className='[font-size:var(--text-14)] md:[font-size:var(--text-16)] lg:[font-size:var(--text-18)] cursor-pointer hover:text-[var(--teal)] transition-colors'>Privacy Policy</li>
                            <li className='[font-size:var(--text-14)] md:[font-size:var(--text-16)] lg:[font-size:var(--text-18)] cursor-pointer hover:text-[var(--teal)] transition-colors'>Terms of Service</li>
                            <li className='[font-size:var(--text-14)] md:[font-size:var(--text-16)] lg:[font-size:var(--text-18)] cursor-pointer hover:text-[var(--teal)] transition-colors'>Return Policy</li>
                        </ul>
                    </div>
                </div>

                <span className='h-[1px] w-full bg-white mb-7 bg-gradient-to-r from-transparent via-white/50 to-transparent'></span>
                <div className='mb-7 [font-size:var(--text-14)] font-[var(--font-normal)] opacity-80'>Copyright © 2025 Yogalis. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Footer