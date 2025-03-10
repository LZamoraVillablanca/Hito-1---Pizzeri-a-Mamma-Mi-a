import React from 'react'
import { useCart } from '../assets/Context/CartContext'

const CardPizza = ({ desc, id, img, ingredients, name, price }) => {
  const { addProduct } = useCart()

  const handleAddToCart = () => {
    addProduct({ id, name, price, img, ingredients, desc })
  }

  return (
    <div className='card'>
      <img src={img} alt={name} className='card-img' />
      <div className='card-content'>
        <h3 className='card-title'>{name}</h3>
        <p className='card-desc'>{desc}</p>
        <p className='card-ingredients'>
          <strong>Ingredientes:</strong> {ingredients.join(', ')}
        </p>
        <span className='card-price'>{price}</span>
        <button className='card-button' onClick={handleAddToCart}>Comprar!</button>
      </div>
    </div>
  )
}

export default CardPizza
