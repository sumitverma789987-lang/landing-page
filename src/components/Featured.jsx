import React, { useState } from 'react'
import { Like } from './common/Icon'

const CARDS = [
    { title: 'Round Yoga Mat', image: '/assets/Matt1.png', price: '€31.95' },
    { title: 'Non-Slip Travel Yoga Mat', image: '/assets/Matt2.png', price: '€31.95' },
    { title: 'Foldable Yoga Mat', image: '/assets/Matt3.png', price: '€31.95' },
]

const Featured = () => {
    const [liked, setLiked] = useState({})

    const toggleLike = (i) => setLiked(prev => ({ ...prev, [i]: !prev[i] }))

    const addToCart = (item) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || []
        const cartItem = {
            name: item.title,
            price: item.price,
            image: item.image,
            
        }
        existingCart.push(cartItem)
        localStorage.setItem('cart', JSON.stringify(existingCart))
     
    }

    return (
        <div className='flex flex-col items-center justify-center w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24 lg:px-35 px-5'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4 mb-8 sm:mb-10'>
                <div className='flex flex-col items-start justify-center'>
                    <h4 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Featured Products</h4>
                    <p className='font-normal text-sm sm:text-base md:text-lg text-[#414143] mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                </div>
            </div>

            <div className='mt-8 sm:mt-10 md:mt-12 w-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
                    {CARDS.map((item, index) => (
                        <div
                            key={index}
                            className='bg-[#F5F5F5] flex flex-col cursor-pointer hover:shadow-lg transition-shadow relative group  overflow-hidden h-full'
                        >
                            <div className='absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-white text-black text-sm sm:text-base md:text-lg font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm z-10'>
                                {item.price}
                            </div>
                            <button
                                className='absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white p-1.5 sm:p-2 rounded-full shadow-sm hover:scale-110 transition-transform z-10'
                                onClick={() => toggleLike(index)}
                                aria-label='Toggle like'
                            >
                                <Like isLiked={liked[index]} />
                            </button>

                            <div className='flex items-center justify-center flex-1 p-4 sm:p-6 md:p-8 relative'>
                                <img src={item.image} alt={item.title} className='object-contain h-40 sm:h-48 md:h-56 lg:h-64 w-full' />
                                <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                    <button className='bg-[#01C6B5] cursor-pointer text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors' onClick={() => addToCart(item)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <h3 className='text-center text-base sm:text-lg md:text-xl p-3 sm:p-4 md:p-5 font-normal bg-white w-full text-black pb-2'>
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured
