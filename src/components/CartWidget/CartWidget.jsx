import "../Styles/main.css"
import carrito from "./assets/carrito.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to='/cart'
      className="cart-container"
    >
      <img src={carrito} alt="Carrito" className="cart-icon"/>
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
