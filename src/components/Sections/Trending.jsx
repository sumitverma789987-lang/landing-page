import React, { useState, useRef } from 'react'
import { Like, Star } from '../common/Icon'
import { TrendingCards } from '../../Utilities/Data'

const Trending = () => {
    const [liked, setLiked] = useState({})
    const [current, setCurrent] = useState(3)
    const [transitioning, setTransitioning] = useState(true)
    const isSliding = useRef(false)

    const toggleLike = (index) => {
        setLiked(prev => ({ ...prev, [index]: !prev[index] }))
    }

    const allTrendingCards = [...TrendingCards, ...TrendingCards, ...TrendingCards]

    const slide = (dir) => {
        if (isSliding.current) return
        isSliding.current = true
        setTransitioning(true)
        const next = dir === 'next' ? current + 1 : current - 1
        setCurrent(next)
        setTimeout(() => {
            if (next >= TrendingCards.length * 2) {
                setTransitioning(false)
                setCurrent(TrendingCards.length)
            } else if (next < TrendingCards.length) {
                setTransitioning(false)
                setCurrent(TrendingCards.length * 2 - 1)
            }
            isSliding.current = false
        }, 400)
    }

    return (
        <div className='flex flex-col items-center max-w-[1440px] mx-auto justify-center w-full mt-[140px] lg:px-35 px-5'>
            <div className='flex flex-row items-center justify-between w-full gap-4 sm:gap-0 mb-[50px]'>
                <div className='flex flex-col items-start justify-center'>
                    <h4 className='font-[var(--font-semibold)] text-[24px] sm:text-[30px]  lg:text-[48px]'>Trending Products</h4>
                    <p className='font-[var(--font-normal)] text-[16px]  text-[var(--gray)] mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                </div>
                <div className='flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-5'>
                    <button
                        onClick={() => slide('prev')}
                        className='group flex items-center justify-center hover:bg-[var(--teal)] hover:border-[var(--teal)] border-2 opacity-65 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-full transition-colors'
                        aria-label='Previous slide'
                    >
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                            <path className='group-hover:fill-white transition-colors' d="M8.486 12.728L7.072 14.142L0 7.072L7.072 0L8.486 1.414L2.829 7.071L8.486 12.728Z" fill="var(--gray)" />
                        </svg>
                    </button>
                    <button
                        onClick={() => slide('next')}
                        className='group flex items-center justify-center hover:bg-[var(--teal)] hover:border-[var(--teal)] border-2 opacity-65 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-full transition-colors'
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
                    className='flex items-stretch'
                    style={{
                        gap: '1.5%',
                        transform: `translateX(calc(-${current} * (100% / 3 + 0.5%)))`,
                        transition: transitioning ? 'transform 0.4s ease' : 'none',
                    }}
                >
                    {allTrendingCards.map((item, index) => (
                        <div
                            key={index}
                            className='bg-white flex-shrink-0 p-3 flex flex-col border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow'
                            style={{ width: 'calc(100% / 3 - 1%)' }}
                        >
                            <div className='relative bg-[#F5F5F5] w-full' style={{ paddingBottom: '75%' }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='absolute inset-0 w-full h-full object-cover'
                                />
                                <button
                                    className='absolute top-2 sm:top-3 right-2 sm:right-3 bg-white p-1.5 sm:p-2 rounded-full shadow-sm hover:scale-110 transition-transform z-10'
                                    onClick={() => toggleLike(index % TrendingCards.length)}
                                    aria-label='Toggle like'
                                >
                                    <Like isLiked={liked[index % TrendingCards.length]} />
                                </button>
                            </div>

                            <div className='p-3 sm:p-4 flex flex-col gap-2 flex-1 justify-between'>
                                <div>
                                    <h3 className='text-[16px]  font-[var(--font-semibold)] text-black line-clamp-2'>{item.title}</h3>
                                    <p className='text-xs sm:text-[16px] font-[var(--font-normal)] text-[var(--gray)] line-clamp-2'>{item.description}</p>
                                </div>

                                <div className='flex items-center justify-between mt-2'>
                                    <span className='text-[20px] font-[var(--font-semibold)] text-black'>{item.price}</span>
                                    <div className='flex flex-row gap-0.5'>
                                        <Star /><Star /><Star /><Star />
                                    </div>
                                </div>

                                <button className="mt-2 w-full py-2 sm:py-3 text-xs sm:text-[16px] md:text-base font-[var(--font-medium)] border bg-white hover:bg-[var(--teal)] hover:text-white rounded transition-colors">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trending