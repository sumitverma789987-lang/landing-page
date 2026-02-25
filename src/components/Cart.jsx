import React, { useEffect, useState } from 'react';

import Navbar from './common/Navbar';
import Header from './common/Header';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);
    }, []);

    return (
        <div>
            <Header />
            <Navbar />

            <div className='flex flex-col max-w-285 mx-auto p-4'>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='font-bold text-4xl mb-6'>Your Cart</h1>
                    <Link to={"/"}>
                        <button className='underline text-[24px] font-medium text-[#414143] opacity-80'>
                            Continue Shopping
                        </button>
                    </Link>
                </div>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className='flex flex-row items-center justify-between border p-6 mb-3 rounded'>

                        
                            <div className='flex flex-row items-center gap-4 flex-1'>
                                <img src={item.image} alt={item.name} className='h-20 w-20 object-contain' />
                                <span className='min-w-max'>{item.name}</span>
                            </div>


                            <div className='flex flex-row items-center max-w-29 justify-center border gap-4 flex-1'>
                                <button className='h-10 text-white w-10 bg-[#414143]'>-</button>
                                <p>1</p>
                                <button className='h-10 text-white w-10 bg-[#01C6B5]'>+</button>
                            </div>

                            <div className='flex justify-end flex-1'>
                                <span className='min-w-max'>{item.price}</span>
                            </div>

                        </div>
                    ))
                )}

            <div className='flex flex-col items-end gap-4'>
                    <div className='flex flex-row  gap-20'>
                        <p className='font-medium text-[16px]'>Estimated total </p>
                        <p className='font-medium text-[16px]'>Dhs. 249.99 AED  </p>

                        
              </div>
                    <p className='text-[16px] font-normal text-[#414143] opacity-80 '>Taxes, discounts  and shipping calculated at <br /> checkout. </p>
                
                    <button className='h-13 border-0 text-white bg-[#01C6B5] w-[310px]'>
Checkout
                    </button>
            </div>
            </div>
        </div>
    );
};

export default Cart;