const CardPizza = ({ img, name, ingredients, price }) => {
  return (
    <div className="pizzas">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Ingredientes: {ingredients.join(", ")}</p>
      <p>Precio: {price}</p>
      <div className="buttons">
        <button>ver más</button>
        <button>añadir al carrito</button>
      </div>
    </div>
  );
};

export default CardPizza;
