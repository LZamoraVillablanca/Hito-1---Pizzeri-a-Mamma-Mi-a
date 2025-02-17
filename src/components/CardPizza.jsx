const CardPizza = ({ desc, id, img, ingredients, name, price }) => {
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
        <button className='card-button'>Comprar!</button>
      </div>
    </div>

  )
}

export default CardPizza
