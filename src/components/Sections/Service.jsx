import React from 'react'
import { Downarrow, Uparrow } from '../common/Icon'
import { services } from '../../Utilities/Data'

const Service = () => {
    return (
        <div className='w-full mt-12 max-w-[1440px] mx-auto sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 md:px-8'>
            <div className='p-6 sm:p-8 md:p-10 lg:p-12'>
                <h2 className='text-center text-[var(--text-24)] md:text-[var(--text-48)] lg:text-[var(--text-48)] font-[var(--font-semibold)] mb-8 sm:mb-10 md:mb-12 lg:mb-16'>Our Service Promise</h2>

                <div className='relative flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full'>
                    <div className='hidden xl:absolute min-[1400px]:flex xl:top-[10%] xl:left-[300px]'><Uparrow /></div>
                    <div className='hidden xl:absolute min-[1400px]:flex xl:bottom-[60%] xl:right-[300px]'><Downarrow /></div>

                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div key={index} className='flex flex-col items-center text-center max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md px-3 sm:px-4 md:px-5 lg:px-6'>
                                <div className='w-14 sm:w-16 md:w-20 lg:w-24 h-14 sm:h-16 md:h-20 lg:h-24 rounded-full bg-[var(--teal)] flex items-center justify-center mb-3 sm:mb-4 md:mb-5 flex-shrink-0'>
                                    <Icon />
                                </div>
                                <h3 className='text-[var(--text-18)] md:text-[var(--text-20)] lg:text-[var(--text-24)] font-[var(--font-bold)] mb-2 sm:mb-3'>{service.title}</h3>
                                <p className='text-[var(--text-14)] md:text-[var(--text-16)] lg:text-[var(--text-16)] text-[var(--gray)] leading-relaxed'>{service.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service