import React, { useState } from 'react'
import { pizzaCart } from '../components/Pizzas/pizzas'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const handleQuantityChange = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count + amount } : item
        )
        .filter((item) => item.count > 0)
    )
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <div className='cart'>
      <h2>Detalles del pedido:</h2>
      <ul className='cart-list'>
        {cart.map((item) => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
            <img src={item.img} alt={item.name} width='200' height='200' style={{ marginRight: '10px' }} />
            <span style={{ flexGrow: 1 }}>{item.name}</span>
            <span>${item.price.toLocaleString()}</span>
            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
            <span>{item.count}</span>
            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toLocaleString()}</h3>
      <button disabled={cart.length === 0}>Pagar</button>
    </div>
  )
}

export default Cart
