import React from 'react'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' w-full flex flex-row  items-center bg-[#01C6B5] text-white justify-between py-2 px-5 lg:px-35 '>
            <div className='flex items-center justify-center  '>
                <img src="assets/Yogalis.png" alt="" />


            </div>
            <div className='flex items-center gap-11 justify-center flex-row'>
<Link to="/">
                <button className='hover:scale-115 text-[16px] font-normal cursor-pointer transition-all ease-in-out duration-200'>
                    Home
                </button>
            </Link>
                <button className='hover:scale-115 text-[16px] font-normal cursor-pointer transition-all ease-in-out duration-200'>
                    Contact
                </button>
                <Link to="/cart">
                    <button className='hover:scale-115 text-[16px] font-normal cursor-pointer transition-all ease-in-out duration-200'>
                        Cart
                    </button>
                </Link>



            </div>

        </div>
    )
}

export default Navbar