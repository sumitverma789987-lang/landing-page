import React, { useState } from 'react'
import { Like } from './common/Icon'

const cards = [
    { title: 'Insulated Sports Bottle', image: '/assets/Category (1).png', price: '€14.95' },
    { title: 'Womens Long Wavy', image: '/assets/Category (13).png', price: '€14.95' },
    { title: 'Acupressure Mat', image: '/assets/Category (23).png', price: '€44.95' },
    { title: 'Liberty Pattern Socks', image: '/assets/Category (22).png', price: '€13.95', sale: true },
    { title: 'Mat Bag with Pocket', image: '/assets/Category (21).png', price: '€26.95' },
    { title: 'Tibetan Singing Bowls', image: '/assets/Category (20).png', price: '€35.95', sale: true },
    { title: 'Soft Yoga Cushion', image: '/assets/Category (19).png', price: '€22.95' },
    { title: 'Cotton Yoga Pants', image: '/assets/Category (18).png', price: '€44.95', sale: true },
    { title: 'Womens Long Wavy', image: '/assets/Category (17).png', price: '€14.95', sale: true },
    { title: 'Travel Yoga Bag', image: '/assets/Category (16).png', price: '€23.95' },
    { title: 'Yoga Workout Shorts', image: '/assets/Category (15).png', price: '€31.95', sale: true },
    { title: 'Cork Yoga Mat', image: '/assets/Category (14).png', price: '€44.95' },
]

const Categories = () => {
    const [liked, setLiked] = useState({})

    const toggleLike = (index) => {
        setLiked(prev => ({ ...prev, [index]: !prev[index] }))
    }

    return (
        <div className='flex flex-col items-center justify-center w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24 lg:px-35 px-5'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0'>
                <div className='flex flex-col items-start justify-center'>
                    <h4 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Shop Our Categories</h4>
                    <p className='font-normal text-sm sm:text-base md:text-lg lg:text-xl text-[#414143] mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                </div>
                <button className='flex items-center justify-center px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium py-3 sm:py-4 md:py-4 bg-[#01C6B5] text-white cursor-pointer hover:bg-[#00b39a] transition-colors whitespace-nowrap'>
                    View all
                </button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full'>
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className='bg-[#F5F5F5] flex flex-col cursor-pointer relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow'
                    >
                        {item.sale && (
                            <div className='absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#01C6B5] text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 z-10 rounded'>
                                Sale
                            </div>
                        )}

                        <button
                            className='absolute top-2 sm:top-3 right-2 sm:right-3 bg-white p-1.5 sm:p-2 rounded-full shadow-sm hover:scale-110 transition-transform z-10'
                            onClick={() => toggleLike(index)}
                            aria-label='Toggle like'
                        >
                            <Like isLiked={liked[index]} />
                        </button>
                        <div className='relative h-40 sm:h-48 md:h-56 lg:h-64 bg-[#F5F5F5] px-4 sm:px-6 md:px-8 flex items-center justify-center'>
                            <img
                                src={item.image}
                                className='w-full h-full object-contain'
                                alt={item.title}
                            />
                            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                <button className='bg-[#01C6B5] cursor-pointer text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors'>
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        <div className='bg-white flex flex-row items-center justify-between px-3 sm:px-4 py-2 sm:py-3 gap-2'>
                            <h3 className='text-xs sm:text-sm md:text-base font-normal text-black flex-1 truncate'>{item.title}</h3>
                            <span className='text-xs sm:text-sm md:text-base font-normal text-black flex-shrink-0'>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories