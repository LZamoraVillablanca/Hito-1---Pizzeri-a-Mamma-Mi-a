import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { formatPriceCLP } from '../assets/FormatNumber'
import { useCart } from '../assets/Context/CartContext'

const Details = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { addProduct } = useCart()

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`)
        if (!response.ok) {
          throw new Error('Error al obtener la pizza')
        }
        const data = await response.json()
        setPizza(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPizza()
  }, [id])

  if (loading) return <p>Cargando...</p>
  if (error) return <p className='text-danger'>Error: {error}</p>
  if (!pizza) return null

  const handleAddToCart = () => {
    const productToAdd = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      img: pizza.img,
      ingredients: pizza.ingredients,
      desc: pizza.desc
    }
    addProduct(productToAdd)
  }

  return (
    <div className='detailedCards'>
      <div className='detailedcard'>
        <img src={pizza.img} alt={pizza.name} className='detailedcard-img' />
        <div className='detailedcard-content'>
          <h3 className='detailedcard-title '>{pizza.name}</h3>
          <p className='detailedcard-description '>{pizza.desc}</p>
          <p className='card-ingredients'>
            <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
          </p>
          <span className='card-price'>{formatPriceCLP(pizza.price)}</span>
          <button className='card-button' onClick={handleAddToCart}>Comprar</button>
        </div>
      </div>
    </div>
  )
}

export default Details
