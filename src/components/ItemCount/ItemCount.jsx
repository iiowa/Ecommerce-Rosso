import "../Styles/main.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [visible, SetVisible] = useState(true);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0 && count <= stock) {
      onAdd(count);
      SetVisible(false);
    }
  };

  return (
    <div className="cart-controls">
      <div className="counter-container">
        <button className="decrement-btn" onClick={decrement}>
          -
        </button>
        <h4 className="count">{count}</h4>
        <button className="increment-btn" onClick={increment}>
          +
        </button>
      </div>
      <div>
        {visible ? (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            {" "}
            Agregar al carrito{" "}
          </button>
        ) : (
          <Link to={"/cart"} className="add-to-cart-btn">
            Terminar mi compra
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
