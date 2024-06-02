import { createContext, useState } from "react";

export const CartContext = createContext({
  cart:[]
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, {...item, quantity}]);
    } else {
      console.error('Ya has añadido el producto');;
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const totalQuantity = () => {
    return cart.reduce((acumulador, item) => (acumulador += item.quantity), 0);
  };

  const total = () => {
    return cart.reduce(
      (acumulador, item) => (acumulador += item.quantity * item.price),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
