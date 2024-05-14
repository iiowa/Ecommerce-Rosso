import "./CartWidget.css"
import carrito from './assets/carrito.png'

const CartWidget = () => {
    return (
        <div>
            <img src={carrito} class="carrito" alt="carrito-widget"/>
            0
        </div>
    )
}

export default CartWidget