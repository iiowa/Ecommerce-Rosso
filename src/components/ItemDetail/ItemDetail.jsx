import "../Styles/main.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, categoryId, price, stock }) => {
  return (
    <article className="item-card">
      <header>
        <h2 className="item-name">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="item-image" />
      </picture>
      <div className="item-details">
        <section>
          <p className="item-description">Categoria: {categoryId}</p>
          <p className="item-price">Precio: ${price}</p>
        </section>
        <footer>
          <ItemCount
            initial={1}
            stock={stock}
            onAdd={(count) => console.log("Cantidad agregada", count)}
          />
        </footer>
      </div>
    </article>
  );
};

export default ItemDetail;
