import React, { useState } from 'react'
import { Like } from '../common/Icon'
import { CategoriesCards } from '../../Utilities/Data'

const Categories = () => {
    const [liked, setLiked] = useState({})
    const toggleLike = (index) => {
        setLiked(prev => ({ ...prev, [index]: !prev[index] }))
    }
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
        <div className='flex flex-col items-center max-w-[1440px] mx-auto justify-center w-full lg:mt-[140px] mt-20 lg:px-35 px-5'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0'>
                <div className='flex flex-col items-start justify-center'>
                    <h4 className='font-[var(--font-semibold)] text-[48px]'>Shop Our Categories</h4>
                    <p className='font-[var(--font-normal)] text-20px text-[var(--gray)] mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                </div>
                <button className='flex items-center justify-center px-4 sm:px-6 md:px-8 text-20px font-[var(--font-medium)] py-3 sm:py-4 md:py-4 bg-[var(--teal)] text-white cursor-pointer hover:bg-[#00b39a] transition-colors whitespace-nowrap'>
                    View all
                </button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full'>
                {CategoriesCards.map((item, index) => (
                    <div
                        key={index}
                        className='bg-[#F5F5F5] flex flex-col cursor-pointer relative group overflow-hidden shadow-sm hover:shadow-md transition-shadow'
                    >
                        {item.sale && (
                            <div className='absolute top-2 sm:top-3 left-2 sm:left-3 bg-[var(--teal)] text-white text-sm font-[var(--font-semibold)] px-2 sm:px-3 py-1 z-10 rounded'>
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
                                <button className='bg-[var(--teal)] cursor-pointer text-white text-[16px] font-[var(--font-semibold)] px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors' onClick={() => addToCart(item)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className='bg-white flex flex-row items-center justify-between px-3 sm:px-4 py-2 sm:py-3 gap-2'>
                            <h3 className='text-[16px] font-[var(--font-normal)] text-black flex-1 truncate'>{item.title}</h3>
                            <span className='text-[16px] font-[var(--font-normal)] text-black flex-shrink-0'>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Categories