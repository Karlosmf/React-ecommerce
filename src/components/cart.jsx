import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, precioTotal, vaciarCarrito} = useContext(CartContext);
    const handleVaciarCarrito = () => {
        vaciarCarrito();
    };
    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.map((prod) => (
                <div key={prod.id}>
                    <h3>{prod.title}</h3>
                    <p>Precio: ${prod.price}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Subtotal: ${prod.price * prod.cantidad}</p>
                </div>
            ))};
            <p>Total: ${precioTotal()}</p>
            <button onClick={handleVaciarCarrito}>Vaciar Carrito</button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    );
};

export default Cart;
 