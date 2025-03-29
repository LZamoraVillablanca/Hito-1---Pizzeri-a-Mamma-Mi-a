import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

const parsePrice = (price) => {
  if (typeof price === 'string') {
    return parseFloat(price.replace(/\./g, '').replace(',', '.').replace('$', ''))
  }
  return price
}

const formatPrice = (value) => {
  return `$${value.toLocaleString('es-CL', { minimumFractionDigits: 0 })}`
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProduct = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id)
      const normalizedPrice = parsePrice(product.price)

      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, price: normalizedPrice, count: 1 }]
    })
  }

  const handleQuantityChange = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + amount } : item)
        .filter((item) => item.count > 0)
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <CartContext.Provider value={{
      cart: cart.map(item => ({ ...item, priceFormatted: formatPrice(item.price) })),
      addProduct,
      handleQuantityChange,
      clearCart,
      total: formatPrice(total)
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
