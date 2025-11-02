import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Cart = () => {
    const { cart, deleteItem, clearCart } = useContext(CartContext)

    useEffect(() => {
        document.title = "Solstice | Carrito";
    }, []);

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <p>Tu carrito está vacío.</p>
                <Link to="/">
                    <button>Volver a la tienda</button>
                </Link>
            </div>
        )
    }
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <div className="cart-container">
            <h2>Tu carrito</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.img} alt={item.product} width={80} />
                    <h3>{item.product}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price}</p>
                    <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                </div>
            ))}
            <h3>Total: ${total}</h3>
            <div className="cart-buttons">
                <button onClick={clearCart}>Vaciar carrito</button>
                <Link to="/checkout">
                    <button>Finalizar compra</button>
                </Link>

            </div>
        </div>
    )
}