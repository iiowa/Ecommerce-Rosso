import "../Styles/main.css"
import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return(
        <article className="card-container">
            <div className="card-wrapper">
            <header>
                <h2 className="card-title">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="card-image"/>
            </picture>
            <section>
                <p className="card-price">
                    Precio: ${price}
                </p>
                <p className="card-price">
                    Stock disponible: {stock}
                </p>
            </section>
            <div className="button-wrapper"></div>
            <footer>
                <Link to={`/item/${id}`} className="detail-btn">Ver detalle</Link>
            </footer>
            </div>
        </article>
    )
}

export default Item