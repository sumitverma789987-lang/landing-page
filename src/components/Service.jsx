import React from 'react'
import { Dedicated, Downarrow, Global, Secure, Uparrow } from './common/Icon'



const ServiceCard = ({ icon, title, description }) => (
    <div className='flex flex-col items-center text-center max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md px-3 sm:px-4 md:px-5 lg:px-6'>
        <div className='w-14 sm:w-16 md:w-20 lg:w-24 h-14 sm:h-16 md:h-20 lg:h-24 rounded-full bg-[#01C6B5] flex items-center justify-center mb-3 sm:mb-4 md:mb-5 flex-shrink-0'>
            {icon}
        </div>
        <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>{title}</h3>
        <p className='text-xs sm:text-sm md:text-base text-[#414143] leading-relaxed'>{description}</p>
    </div>
)

const Service = () => {
    return (
        <div className='w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8'>
            <div className='p-6 sm:p-8 md:p-10 lg:p-12'>
                <h2 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-10 md:mb-12 lg:mb-16'>Our Service Promise</h2>

                <div className='relative flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full'>
                    <ServiceCard
                        icon={<Global />}
                        title='Global Delivery & Easy Returns'
                        description='Shop confidently with worldwide shipping and flexible return policies.'
                    />

                    <div className='hidden xl:absolute min-[1400px]:flex xl:top-[10%] xl:left-[300px]'>
                        <Uparrow />
                    </div>

                    <ServiceCard
                        icon={<Secure />}
                        title='Secure & Seamless Checkout'
                        description='Your data is protected with encrypted, hassle-free payments.'
                    />

                    <div className='hidden xl:absolute min-[1400px]:flex xl:bottom-[60%] xl:right-[300px]  '>
                        <Downarrow />
                    </div>

                    <ServiceCard
                        icon={<Dedicated />}
                        title='Dedicated Support, Always'
                        description="Get expert help whenever you need it — we're just a message away."
                    />
                </div>
            </div>
        </div>
    )
}

export default Service