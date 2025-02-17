import { formatPriceCLP } from '../assets/FormatNumber'
import CardPizza from './CardPizza'
import Header from './Header'
import { pizzas } from './Pizzas/pizzas'
import '../main.css'
const Home = () => {
  return (
    <div>
      <Header />
      <div className='cards-container'>
        {pizzas.map((pizza) => (
          <CardPizza
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
