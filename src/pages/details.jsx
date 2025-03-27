import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()
  console.log('ID obtenido de la URL:', id)
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  return (
    <div className='card'>
      <img src={pizza.img} alt={pizza.name} className='card-img' />
      <div className='card-content'>
        <h3 className='card-title'>{pizza.name}</h3>
        <p className='card-desc'>{pizza.desc}</p>
        <p className='card-ingredients'>
          <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
        </p>
        <span className='card-price'>{pizza.price}</span>
      </div>
    </div>
  )
}

export default Details
