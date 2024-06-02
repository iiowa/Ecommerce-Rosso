const CartItem = ({ id, name, price, stock, img, onAdd }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{price}</p>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <button className="decrement-btn" onClick={() => onAdd(id)}> - </button>
      <p>{stock}</p>
      <button className="increment-btn" onClick={() => onAdd(id)}> + </button>
    </li>
  );
};

export default CartItem;
