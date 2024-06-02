import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Loading from "../Loading/loading";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState("");
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");
    const resultQuery = query(itemsCollection, where("price", ">", 100));
    getDocs(resultQuery).then((snapShot) => {
      if (snapShot.size > 0) {
        setCart(snapShot.docs.map((item) => ({ id: item.id, ...item.data() })));
        setLoading(false);
      } else {
        console.log("No existen Documentos!");
        setCart([]);
      }
    });
  }, []);

  const obtenerSumaTotal = () => {
    return cart.reduce((acumulador, item) => (acumulador += item.price), 0);
  };

  const generarOrden = () => {
    const buyer = { name: nombre, email: email, phone: telefono };
    console.log(buyer);
    const items = cart.map((item) => ({
      id: item.id,
      title: item.name,
      price: item.price,
    }));
    const order = { buyer: buyer, items: items, total: obtenerSumaTotal() };
    console.log(order);
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((data) =>
      addDoc(ordersCollection, order).then((data) => {
        setOrderId(data.id);
      })
    );

    const orderRef = doc(db, "products", "IC5vDMXwA9529NaP1AKh");
    getDoc(orderRef).then((producto) => {
      const { stock } = producto.data();
      updateDoc(orderRef, { stock: stock - 1 });
    });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                onInput={(event) => {
                  setNombre(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                onInput={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="text"
                className="form-control"
                onInput={(event) => {
                  setTelefono(event.target.value);
                }}
              />
            </div>
            <button
              type="button"
              className="btn bg-light"
              onClick={generarOrden}
            >
              Generar Orden
            </button>
          </form>
        </div>
        <div className="col">
          {loading ? (
            <Loading />
          ) : (
            <table className="table">
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="align-middle">
                      <img src={item.img} alt={item.name} width={64} />
                    </td>
                    <td className="align-middle">{item.name}</td>
                    <td className="align-middle text-end">${item.price}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2}>
                    <b>Total</b>
                  </td>
                  <td className="text-end">
                    <b>${obtenerSumaTotal()}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="row my-5">
        <div className="col text-center">
          {orderId ? (
            <div className="alert alert-light" role="alert">
              Felicitaciones! Tu Orden de Compra es: <b>{orderId}</b>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
