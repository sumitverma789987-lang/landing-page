import React, { useState } from 'react'
import { Arrow } from './common/Icon'



const Accordian = () => {
    const accordion = [
        { title: 'Our commitment to payment security', description: 'All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.' },
        { title: 'Our policy for returns and refunds', description: 'All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.' },
        { title: 'Product delivery times', description: 'All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.' },
        { title: 'Our warranty policy', description: 'All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.' },

    ]
    const [activeIndex, setActiveIndex] = useState(0)
    const toggle = (i) => setActiveIndex(prev => prev === i ? null : i)

    return (
        <div className='flex flex-col items-center justify-center mt-[140px] lg:px-35 px-5'>
            <h1 className='text-5xl font-semibold text-center'>Frequently Asked Questions</h1>
            <p className='text-[16px] font-normal text-[#414143] mt-2 sm:mt-3 md:mt-4 text-center max-w-2xl'>Real Questions. Expert Answers. Total Confidence.</p>
            <div className='flex flex-col space-y-3 sm:space-y-4 md:space-y-5 mt-8 sm:mt-10 md:mt-12 items-center justify-center w-full'>
                {accordion.map((item, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl w-full p-4 sm:p-5 md:p-6 transition-all duration-200 ${activeIndex === index ? 'border-[#01C6B5] shadow-md' : 'border-[#41414366] hover:border-[#41414399]'}`}
                    >
                        <div className='flex flex-col'>
                            <button
                                onClick={() => toggle(index)}
                                className='w-full flex items-start sm:items-center justify-between text-left  rounded px-1 py-1'
                            >
                                <h4 className='font-medium text-[20px] pr-3 flex-1 break-words'>{item.title}</h4>
                                <span className={`ml-2 sm:ml-3 flex-shrink-0 transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    <Arrow />
                                </span>
                            </button>
                            {activeIndex === index && (
                                <p className='font-normal text-[#414143] text-xs sm:text-sm md:text-base lg:text-[16px] mt-3 sm:mt-4 md:mt-5 leading-relaxed'>{item.description}</p>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Accordian