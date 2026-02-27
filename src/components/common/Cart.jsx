import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
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
                    <h1 className='font-[var(--font-bold)] text-[30px] mb-6'>Your Cart</h1>
                    <Link to={"/"}>
                        <button className='underline text-[24px] font-[var(--font-medium)] text-[var(--gray)] opacity-80'>
                            Continue Shopping
                        </button>
                    </Link>
                </div>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className='flex flex-row items-center justify-between p-6 mb-3 rounded'>
                            <div className='flex flex-row items-center gap-4 flex-1'>
                                <img src={item.image} alt={item.name} className='h-20 w-20 object-contain' />
                                <span className='min-w-max'>{item.name}</span>
                            </div>

                            <div className='flex flex-row items-center max-w-29 justify-center border gap-4 flex-1'>
                                <button className='h-10 text-white w-10 bg-[var(--gray)]'>-</button>
                                <p>1</p>
                                <button className='h-10 text-white w-10 bg-[var(--teal)]'>+</button>
                            </div>

                            <div className='flex justify-end flex-1'>
                                <span className='min-w-max'>{item.price}</span>
                            </div>
                        </div>
                    ))
                )}

                {cartItems.length > 0 && (
                    <div className='flex flex-col items-end gap-4'>
                        <div className='flex flex-row gap-20'>
                            <p className='font-[var(--font-medium)] text-[var(--text-16)]'>Estimated total</p>
                            <p className='font-[var(--font-medium)] text-[var(--text-16)]'>Dhs. 249.99 AED</p>
                        </div>
                        <p className='text-[var(--text-16)] font-[var(--font-normal)] text-[var(--gray)] opacity-80'>Taxes, discounts and shipping calculated at <br /> checkout.</p>
                        <button className='h-13 border-0 text-white bg-[var(--teal)] w-[310px]'>
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;