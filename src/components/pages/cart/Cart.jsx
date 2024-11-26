import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>pagina carrito</h1>
      {cart.map((elemento) => {
        return (
          <div
            key={elemento.id}
            style={{ border: "2px solid black", padding: "20px" }}
          >
            <h3>{elemento.title}</h3>
            <h3>cantidad: {elemento.quantity}</h3>
            <h3>precio: {elemento.price}</h3>
            <button>Eliminar</button>
          </div>
        );
      })}

      <button>Limpiar todo el carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
