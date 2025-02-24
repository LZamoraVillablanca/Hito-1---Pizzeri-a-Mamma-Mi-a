import { formatPriceCLP } from '../assets/FormatNumber'
import CardPizzas from './CardPizzas'
import Header from './Header'
import '../main.css'
import { useState } from 'react'
import { useEffect } from 'react'
const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const URL = 'http://localhost:5000/api/pizzas'

  const getPizza = async () => {
    try {
      const res = await fetch(URL)
      const data = await res.json()
      setPizzas(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getPizza()
  }, [])

  console.log(pizzas)
  return (

    <div>
      <Header />
      <div className='cards-container'>
        {pizzas.map((pizza) => (
          <CardPizzas
            key={pizza.id}
            name={pizza.name}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
            price={formatPriceCLP(pizza.price)}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
