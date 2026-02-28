import React from 'react'
import { BlogCards } from '../../Utilities/Data'

const Blog = () => {
    return (
        <div className='w-full max-w-[1440px] mx-auto flex items-center justify-center flex-col mt-12 sm:mt-16 md:mt-20 lg:mt-24 lg:px-35 px-5'>

            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-4'>
                <h2 className='text-[var(--text-24)] md:text-[var(--text-48)] lg:text-[var(--text-48)] font-[var(--font-bold)]'>From The Blog</h2>
                <button className='bg-[var(--teal)] text-white text-[var(--text-14)] md:text-[var(--text-16)] lg:text-[var(--text-16)] font-[var(--font-medium)] px-4 sm:px-6 md:px-8 py-3 md:py-4 cursor-pointer hover:bg-[#00b39a] transition-colors whitespace-nowrap'>
                    View All Blogs
                </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full'>
                {BlogCards.map((item, index) => (
                    <div key={index} className='flex flex-col overflow-hidden hover:shadow-lg transition-shadow'>

                        <div className='h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                            />
                        </div>

                        <div className='pt-3 sm:pt-4 md:pt-5 px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 flex flex-col gap-2 sm:gap-3 flex-1'>
                            <p className='text-[var(--text-14)] md:text-[var(--text-14)] lg:text-[var(--text-14)] text-[var(--gray)]'>{item.date}</p>
                            <h3 className='text-[var(--text-16)] md:text-[var(--text-18)] lg:text-[var(--text-20)] font-[var(--font-bold)] text-black line-clamp-2'>{item.title}</h3>
                            <p className='text-[var(--text-14)] md:text-[var(--text-14)] lg:text-[var(--text-16)] text-[var(--gray)] line-clamp-3'>{item.description}</p>
                            <button className='flex items-center gap-2 text-[var(--teal)] text-[var(--text-14)] md:text-[var(--text-14)] lg:text-[var(--text-16)] font-[var(--font-medium)] mt-1 sm:mt-2 cursor-pointer w-fit hover:text-[#00b39a] transition-colors'>
                                Read More
                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-4 h-3 sm:w-5 sm:h-3'>
                                    <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog