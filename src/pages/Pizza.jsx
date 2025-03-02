import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { formatPriceCLP } from '../assets/FormatNumber'

const OnePizza = ({ desc, id, img, ingredients, name, price }) => {
  const [pizza, setPizza] = useState(null)
  const URL = 'http://localhost:5000/api/pizzas/p001'

  const getPizza = async () => {
    try {
      const res = await fetch(URL)
      const data = await res.json()
      setPizza(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <div className='card mb-3' style={{ maxWidth: '800px' }}>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={pizza?.img || img} alt={pizza?.name || name} className='img-fluid rounded-start h-100 object-fit-cover' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h3 className='card-title'>{pizza?.name || name}</h3>
            <p className='card-text'>{pizza?.desc || desc}</p>
            <p className='card-text'>
              <strong>Ingredientes:</strong>
              <ul>
                {(pizza?.ingredients || ingredients)?.map((ingredient) => (
                  <li key={`${pizza?.name || name}-${ingredient}`} className='text-muted small'>🍕 {ingredient}</li>
                ))}
              </ul>
            </p>
            <span className='card-text fw-bold text-success'>
              {formatPriceCLP(pizza?.price || price)}
            </span>
            <br />
            <button className='btn btn-danger mt-2'>Comprar!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnePizza
