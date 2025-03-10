import React from 'react'
import { useCart } from '../assets/Context/CartContext'

const Cart = () => {
  const { cart, handleQuantityChange, total } = useCart()

  return (
    <div className='cart'>
      <h2>Detalles del pedido:</h2>
      <ul className='cart-list'>
        {cart.map((item) => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
            <img src={item.img} alt={item.name} width='200' height='200' style={{ marginRight: '10px' }} />
            <span style={{ flexGrow: 1 }}>{item.name}</span>
            <span>{item.priceFormatted}</span>
            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
            <span>{item.count}</span>
            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
          </li>
        ))}
      </ul>
      <h3>Total: {total}</h3>
      <button disabled={cart.length === 0}>Pagar</button>
    </div>
  )
}

export default Cart
