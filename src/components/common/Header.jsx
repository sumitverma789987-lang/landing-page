import React from 'react'
import { Cart, Free, Profile, Search } from './Icon'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full flex max-w-[1440px] mx-auto flex-row items-center justify-between p-3 px-5 lg:px-35'>
            <div className='flex items-center justify-center flex-row gap-3'>
                <Free />
                <p className='[font-size:var(--text-14)] md:[font-size:var(--text-14)] lg:[font-size:var(--text-16)] font-[var(--font-normal)] text-[var(--gray)]'>
                    Free delivery & free returns within 15 days
                </p>
            </div>
            <div className='md:flex hidden items-center gap-3 justify-center flex-row'>
                <button className='hover:scale-115 cursor-pointer transition-all ease-in-out duration-200'>
                    <Search />
                </button>
                <button className='hover:scale-115 cursor-pointer transition-all ease-in-out duration-200'>
                    <Profile />
                </button>
                <Link to="/cart">
                    <button className='hover:scale-115 cursor-pointer transition-all ease-in-out duration-200'>
                        <Cart />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header