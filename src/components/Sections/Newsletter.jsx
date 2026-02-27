import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full bg-[#F1F1F1]'>
            <div className='max-w-[1440px] mx-auto w-full'>
                <div className='flex flex-col md:flex-row md:items-center justify-between mt-12 px-5 sm:mt-16 md:mt-20 lg:mt-24 gap-6 sm:gap-8 md:gap-0'>
                    <img src="assets/Photo.png" alt='' className='hidden lg:block object-contain' />
                    <div className='flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16 flex-1'>
                        <h1 className='text-[24px] sm:text-[24px]  lg:text-[48px] font-[var(--font-semibold)] text-center leading-tight'>Subscribe To Our Newsletter</h1>
                        <p className='font-[var(--font-normal)] text-[16px] text-center text-[var(--gray)] mt-4 sm:mt-5 md:mt-6 max-w-lg leading-relaxed'>Get weekly updates on the newest design stories, case studies and tips right in your mailbox.</p>
                        <div className='border border-[var(--gray)] p-1.5 sm:p-2 md:p-2.5 mt-6 sm:mt-7 md:mt-8 lg:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-0 w-full sm:max-w-lg md:max-w-2xl rounded-lg overflow-hidden'>
                            <input type="email" placeholder='Email Address' className='flex-1 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-base border-0 outline-0 focus:ring-0 bg-transparent' />
                            <button className='flex items-center justify-center bg-[var(--teal)] text-white font-[var(--font-medium)]  text-[16px] px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 hover:bg-[#00b39a] transition-colors whitespace-nowrap mt-3 sm:mt-0'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <img src="assets/Bottle.png" className='hidden xl:block h-auto object-contain' />
                </div>
            </div>
        </div>
    )
}

export default Newsletter