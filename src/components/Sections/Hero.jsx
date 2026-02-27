import React, { useState, useEffect } from 'react'
import { HeroSlides } from '../../Utilities/Data'
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

   

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HeroSlides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [HeroSlides.length])



    return (

        <div className='w-full max-w-[1440px] h-[787px] mx-auto'>
            <div className='relative w-full h-full'>
                {HeroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`z-10 bg-cover bg-center absolute w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                        <div
                            className='absolute inset-0 z-0'
                            style={{ background: 'linear-gradient(90.64deg, rgba(0, 0, 0, 0.65) 5.47%, rgba(0, 0, 0, 0) 95.31%)' }}
                        />
                        <div className='relative z-20 text-white h-full flex flex-col items-start justify-center lg:px-35 px-5'>
                            <h1 className='tracking-widest text-xs sm:text-sm md:text-base lg:text-lg font-normal'>{slide.subtitle}</h1>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight my-4'>{slide.title}</h1>
                            <h1 className='font-normal text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl leading-relaxed'>
                                {slide.description}
                            </h1>
                            <button className='bg-[#01C6B5] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base md:text-lg font-medium mt-6  hover:bg-[#00b39a] transition-colors'>Shop now</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Hero