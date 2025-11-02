import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";

export const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [form, setForm] = useState({ name: "", phone: "", email: "" })

    useEffect(() => {
        document.title = "Solstice | Finalizar compra";
    }, []);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const order = {
            buyer: form,
            items: cart,
            total
        }

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')

        try {
            const { id } = await addDoc(ordersCollection, order)
            setOrderId(id)
            clearCart()
            setForm({ name: "", phone: "", email: "" })
        } catch (error) {
            console.error('Error al realizar el pedido;', error)
        }
    }

    if (orderId) {
        return (
            <div>
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <h2>Finalizar compra</h2>
            <h3>Total de tu compra: ${total}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Teléfono" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
                <button type="submit">Confirmar compra</button>
            </form>
        </div>
    )
}