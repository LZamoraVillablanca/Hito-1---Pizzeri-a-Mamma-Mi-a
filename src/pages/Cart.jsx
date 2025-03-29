import React from 'react'
import { useCart } from '../assets/Context/CartContext'
import { useUserContext } from '../assets/Context/UserContext'

const Cart = () => {
  const { cart, handleQuantityChange, total, clearCart } = useCart()
  const { isAuthenticated } = useUserContext()

  const checkout = async () => {
    if (!isAuthenticated) {
      alert('Debes estar autenticado para realizar el pago')
      return
    }

    const token = localStorage.getItem('token')
    if (!token) {
      alert('Token no encontrado. Debes iniciar sesión para continuar.')
      return
    }

    const checkoutData = {
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.count,
        price: item.priceFormatted
      })),
      total
    }

    try {
      const response = await fetch('http://localhost:5000/api/checkouts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(checkoutData)
      })

      if (!response.ok) {
        throw new Error('Hubo un error al procesar el pago')
      }
      alert(`Pago realizado con éxito! Tu número de pedido es: ${Math.floor(Math.random() * 9000) + 1000}`)

      clearCart()
    } catch (error) {
      alert(error.message)
    }
  }

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
      <button
        disabled={cart.length === 0 || !isAuthenticated}
        onClick={checkout}
      >
        {isAuthenticated ? 'Pagar' : 'Regístrese para continuar'}
      </button>
    </div>
  )
}

export default Cart
