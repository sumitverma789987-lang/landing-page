import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            try {
                const items = JSON.parse(savedCart)
                setCartItems(items)
                calculateCount(items)
            } catch (error) {
                console.error('Error loading cart:', error)
            }
        }
    }, [])

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
        calculateCount(cartItems)
    }, [cartItems])

    const calculateCount = (items) => {
        const count = items.reduce((sum, item) => sum + item.quantity, 0)
        setCartCount(count)
    }

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...prevItems, { ...product, quantity: 1 }]
            }
        })
    }

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId)
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === productId
                        ? { ...item, quantity }
                        : item
                )
            )
        }
    }

    const clearCart = () => {
        setCartItems([])
    }

    const cartTotal = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('€', '').replace(',', '.'))
        return sum + (price * item.quantity)
    }, 0).toFixed(2)

    return (
        <CartContext.Provider value={{
            cartItems,
            cartCount,
            cartTotal,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within CartProvider')
    }
    return context
}
