import React, { useState, useRef, useEffect } from 'react'
import { Like } from './common/Icon';

const Featured = () => {
    const [liked, setLiked] = useState({})
    const [current, setCurrent] = useState(3)
    const [transitioning, setTransitioning] = useState(true)
    const [dimensions, setDimensions] = useState({ cardWidth: 364, cardHeight: 500, gap: 20 })
    const isSliding = useRef(false)

  
    useEffect(() => {
        const storedLiked = JSON.parse(localStorage.getItem('liked')) || {}
        setLiked(storedLiked)
    }, [])

     
    useEffect(() => {
        localStorage.setItem('liked', JSON.stringify(liked))
    }, [liked])

    useEffect(() => {
        const calculateDimensions = () => {
            const width = window.innerWidth
            if (width < 640) {
                setDimensions({ cardWidth: 250, cardHeight: 380, gap: 12 })
            } else if (width < 1024) {
                setDimensions({ cardWidth: 300, cardHeight: 420, gap: 16 })
            } else {
                setDimensions({ cardWidth: 364, cardHeight: 500, gap: 20 })
            }
        }
        calculateDimensions()
        window.addEventListener('resize', calculateDimensions)
        return () => window.removeEventListener('resize', calculateDimensions)
    }, [])

    const toggleLike = (index) => {
        setLiked(prev => ({ ...prev, [index]: !prev[index] }))
    }


    const cards = [
        { title: 'Round Yoga Mat', image: '/assets/Matt1.png', price: '€31.95' },
        { title: 'Non-Slip Travel Yoga Mat', image: '/assets/Matt2.png', price: '€31.95' },
        { title: 'Foldable Yoga Mat', image: '/assets/Matt3.png', price: '€31.95' },
    ]

    const allCards = [...cards, ...cards, ...cards]
    const { cardWidth, cardHeight, gap } = dimensions
    const step = cardWidth + gap

    const slide = (dir) => {
        if (isSliding.current) return
        isSliding.current = true
        setTransitioning(true)

        const next = dir === 'next' ? current + 1 : current - 1
        setCurrent(next)

        setTimeout(() => {
            if (next >= cards.length * 2) {
                setTransitioning(false)
                setCurrent(cards.length)
            } else if (next < cards.length) {
                setTransitioning(false)
                setCurrent(cards.length * 2 - 1)
            }
            isSliding.current = false
        }, 400)
    }

    const realIndex = ((current - cards.length) % cards.length + cards.length) % cards.length

    return (
        <div className='flex flex-col items-center justify-center w-full mt-30  lg:px-35 px-5'>
            <div className='flex flex-row items-center justify-between w-full gap-4 sm:gap-0 mb-8 sm:mb-10'>
                <div className='flex flex-col items-start justify-center'>
                    <h4 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Featured Products</h4>
                    <p className='font-normal text-sm sm:text-base md:text-lg text-[#414143] mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                </div>
                <div className='flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-5'>
                    <button
                        onClick={() => slide('prev')}
                        className='group flex items-center justify-center hover:bg-[#01c6b5] hover:border-[#01c6b5] border-2 border-[#414143] border-[#414143] opacity-65 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-full transition-colors'
                        aria-label='Previous slide'
                    >
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='group-hover:fill-white transition-colors' d="M8.486 12.728L7.072 14.142L0 7.072L7.072 0L8.486 1.414L2.829 7.071L8.486 12.728Z" fill="#414143" />
                        </svg>
                    </button>
                    <button
                        onClick={() => slide('next')}
                        className='group flex items-center justify-center hover:bg-[#01c6b5] hover:border-[#01c6b5] border-2 border-[#414143] border-[#414143] opacity-65 px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-full transition-colors'
                        aria-label='Next slide'
                    >
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='group-hover:fill-white transition-colors' d="M0.000328064 1.41397L1.41433 -3.14713e-05L8.48633 7.06997L1.41433 14.142L0.000328064 12.728L5.65733 7.07097L0.000328064 1.41397Z" fill="#414143" />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className='mt-5 overflow-hidden w-full '
                style={{ width: `${cardWidth * 3 + gap * 2}px`, maxWidth: '100%' }}
            >
                <div
                    className='flex'
                    style={{
                        gap: `${gap}px`,
                        transform: `translateX(-${current * step}px)`,
                        transition: transitioning ? 'transform 0.4s ease' : 'none',
                    }}
                >
                    {allCards.map((item, index) => (
                        <div
                            key={index}
                            className='bg-[#F5F5F5] flex-shrink-0  flex flex-col cursor-pointer hover:shadow-lg transition-shadow relative group  overflow-hidden'
                            style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
                        >
                            <div className='absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-white text-black text-sm sm:text-base md:text-lg font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm z-10'>
                                {item.price}
                            </div>
                            <button
                                className='absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white p-1.5 sm:p-2 rounded-full shadow-sm hover:scale-110 transition-transform z-10'
                                onClick={() => toggleLike(index % cards.length)}
                                aria-label='Toggle like'
                            >
                                <Like isLiked={liked[index % cards.length]} />
                            </button>

                            <div className='flex items-center justify-center flex-1 p-4 sm:p-6 md:p-10 relative'>
                                <img src={item.image} alt={item.title} className='object-contain h-40 sm:h-48 md:h-64 lg:h-80 w-full' />
                                <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                    <button className='bg-[#01C6B5] cursor-pointer text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#00b39a] transition-colors'>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <h3 className='text-center text-base sm:text-lg md:text-2xl p-3 sm:p-4 md:p-5 font-normal bg-white w-full text-black pb-2'>
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
