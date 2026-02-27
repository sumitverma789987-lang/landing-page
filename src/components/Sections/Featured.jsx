import React, { useState, useRef } from 'react'
import { Like } from '../common/Icon';
import { FeatureCards } from '../../Utilities/Data';

const Featured = () => {
    const [liked, setLiked] = useState({})
    const [current, setCurrent] = useState(3)
    const [transitioning, setTransitioning] = useState(true)
    const isSliding = useRef(false)
    const trackRef = useRef(null)

    const toggleLike = (index) => {
        setLiked(prev => ({ ...prev, [index]: !prev[index] }))
    }

    const addToCart = (item) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || []
        existingCart.push({ name: item.title, price: item.price, image: item.image })
        localStorage.setItem('cart', JSON.stringify(existingCart))
    }

    const allFeatureCards = [...FeatureCards, ...FeatureCards, ...FeatureCards]

    const slide = (dir) => {
        if (isSliding.current) return
        isSliding.current = true
        setTransitioning(true)

        const next = dir === 'next' ? current + 1 : current - 1
        setCurrent(next)

        setTimeout(() => {
            if (next >= FeatureCards.length * 2) {
                setTransitioning(false)
                setCurrent(FeatureCards.length)
            } else if (next < FeatureCards.length) {
                setTransitioning(false)
                setCurrent(FeatureCards.length * 2 - 1)
            }
            isSliding.current = false
        }, 400)
    }

    return (
        <div className='flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto mt-25 lg:mt-[130px] lg:px-35 px-5'>
            <div className='flex flex-row items-center justify-between w-full gap-4 sm:gap-0 mb-[50px] sm:mb-10'>
                <div className='flex flex-col items-start justify-center'>
                    <h4 className='font-[var(--font-semibold)] text-[48px]'>Featured Products</h4>
                    <p className='font-[var(--font-normal)] text-[16px] text-[var(--gray)] mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                </div>
                <div className='flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-5'>
                    <button
                        onClick={() => slide('prev')}
                        className='group flex items-center justify-center hover:bg-[var(--teal)] hover:border-[var(--teal)] border-2 border-[var(--gray)] opacity-65 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-full transition-colors'
                        aria-label='Previous slide'
                    >
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                            <path className='group-hover:fill-white transition-colors' d="M8.486 12.728L7.072 14.142L0 7.072L7.072 0L8.486 1.414L2.829 7.071L8.486 12.728Z" fill="var(--gray)" />
                        </svg>
                    </button>
                    <button
                        onClick={() => slide('next')}
                        className='group flex items-center justify-center hover:bg-[var(--teal)] hover:border-[var(--teal)] border-2 border-[var(--gray)] opacity-65 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-full transition-colors'
                        aria-label='Next slide'
                    >
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                            <path className='group-hover:fill-white transition-colors' d="M0.000328064 1.41397L1.41433 -3.14713e-05L8.48633 7.06997L1.41433 14.142L0.000328064 12.728L5.65733 7.07097L0.000328064 1.41397Z" fill="var(--gray)" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='overflow-hidden w-full'>
                <div
                    ref={trackRef}
                    className='flex items-stretch'
                    style={{
                        gap: '1.5%',
                        transform: `translateX(calc(-${current} * (100% / 3 + 0.5%)))`,
                        transition: transitioning ? 'transform 0.4s ease' : 'none',
                    }}
                >
                    {allFeatureCards.map((item, index) => (
                        <div
                            key={index}
                            className='bg-[#F5F5F5] flex-shrink-0 flex flex-col cursor-pointer hover:shadow-lg transition-shadow relative group overflow-hidden'
                            style={{ width: 'calc(100% / 3 - 1%)' }}
                        >
                            <div className='absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-white text-black text-[16px] font-[var(--font-semibold)] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm z-10'>
                                {item.price}
                            </div>

                            <button
                                className='absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white p-1.5 sm:p-2 rounded-full shadow-sm hover:scale-110 transition-transform z-10'
                                onClick={() => toggleLike(index % FeatureCards.length)}
                                aria-label='Toggle like'
                            >
                                <Like isLiked={liked[index % FeatureCards.length]} />
                            </button>

                            <div className='relative flex items-center justify-center flex-1 min-h-[180px] sm:min-h-[240px] md:min-h-[320px] p-4 sm:p-6 md:p-10'>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='object-contain w-full h-full absolute inset-0 p-4 sm:p-6 md:p-10'
                                />
                                <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className='bg-[var(--teal)] cursor-pointer text-whitetext-[16px] font-[var(--font-semibold)] px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors'
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <h3 className='text-center text-24px p-3 sm:p-4 md:p-5 font-[var(--font-normal)] bg-white w-full text-black pb-2'>
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