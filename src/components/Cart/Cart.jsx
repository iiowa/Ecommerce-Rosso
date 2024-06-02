import "../Styles/main.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0){
        return (
            <div>
                <h1>NO HAY PRODUCTOS SELECCIONADOS</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return (
        <div className="cart-controls">
            <div className="counter-container">
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="detail-btn">Vaciar carrito</button>
            <Link to='/checkout' className="detail-btn">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart