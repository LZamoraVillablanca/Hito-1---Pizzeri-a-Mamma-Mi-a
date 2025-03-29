import { useNavigate } from 'react-router-dom'
import { useCart } from '../assets/Context/CartContext'

const CardPizza = ({ id, desc, ingredients, img, name, price }) => {
  const { addProduct } = useCart()
  const navigate = useNavigate()

  const handleAddToCart = () => {
    addProduct({ id, name, price, img })
  }

  const handleMoreInfo = () => {
    console.log(id)
    navigate(`/pizza/${id}`)
  }

  return (
    <div className='card'>
      <img src={img} alt={name} className='card-img' />
      <div className='card-content'>
        <h3 className='card-title'>{name}</h3>
        <p className='card-ingredients'>
          <strong>Ingredientes:</strong> {ingredients.join(', ')}
        </p>
        <span className='card-price'>{price}</span>
        <div className='botonera'>
          <button className='card-button' onClick={handleAddToCart}>Comprar!</button>
          <button className='card-button' onClick={handleMoreInfo}>más info!</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
