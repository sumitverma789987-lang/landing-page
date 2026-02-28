import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-full bg-[var(--teal)]'>
            <div className='w-full max-w-[1440px] mx-auto flex flex-row items-center text-white justify-between py-2 px-5 lg:px-35 relative'>
                <div className='flex items-center justify-center'>
                    <Link to="/">
                        <img src="assets/Yogalis.png" alt="" />
                    </Link>
                </div>

           
                <div className='hidden md:flex items-center gap-11 justify-center flex-row'>
                    <Link to="/">
                        <button className='hover:scale-115 text-[var(--text-14)] lg:text-[var(--text-16)] font-[var(--font-normal)] cursor-pointer transition-all ease-in-out duration-200'>
                            Home
                        </button>
                    </Link>
                    <button className='hover:scale-115 text-[var(--text-14)] lg:text-[var(--text-16)] font-[var(--font-normal)] cursor-pointer transition-all ease-in-out duration-200'>
                        Contact
                    </button>
                    <Link to="/cart">
                        <button className='hover:scale-115 text-[var(--text-14)] lg:text-[var(--text-16)] font-[var(--font-normal)] cursor-pointer transition-all ease-in-out duration-200'>
                            Cart
                        </button>
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='md:hidden flex flex-col z-500 gap-1'
                >
                    <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-55 translate-y-1' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-55 -translate-y-2' : ''}`}></span>
                </button>

                <div className={`fixed md:hidden top-0 right-0 h-screen w-64 bg-[var(--teal)] flex flex-col items-center gap-8 pt-20 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        <button className='hover:scale-115 text-[var(--text-16)] font-[var(--font-normal)] cursor-pointer transition-all ease-in-out duration-200'>
                            Home
                        </button>
                    </Link>
                    <button className='hover:scale-115 text-[var(--text-16)] font-[var(--font-normal)] cursor-pointer transition-all ease-in-out duration-200'>
                        Contact
                    </button>
                    <Link to="/cart" onClick={() => setIsOpen(false)}>
                        <button className='hover:scale-115 text-[var(--text-16)] font-[var(--font-normal)] cursor-pointer transition-all ease-in-out duration-200'>
                            Cart
                        </button>
                    </Link>
                </div>

                {isOpen && (
                    <div
                        className='fixed md:hidden top-0 left-0 right-0 bottom-0 bg-black/50 z-40'
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}
            </div>
        </div>
    )
}

export default Navbar