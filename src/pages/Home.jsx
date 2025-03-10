import { formatPriceCLP } from '../assets/FormatNumber'
import CardPizzas from '../components/CardPizzas'
import Header from '../components/Header'
import '../main.css'
import { useState, useEffect } from 'react'

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
          <div key={pizza.id} className='pizza-card'>
            <CardPizzas
              name={pizza.name}
              desc={pizza.desc}
              ingredients={pizza.ingredients}
              price={formatPriceCLP(pizza.price)}
              img={pizza.img}
              id={pizza}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
