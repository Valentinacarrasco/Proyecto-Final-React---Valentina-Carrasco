import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (product, quantity) => {
        const {stock, ...rest} = product
        const alreadyExists = cart.some(product => product.id === rest.id)
        
        if (!alreadyExists){
            setCart(prev => [...prev, {...rest, quantity}])
        }else{
            const updatedCart = cart.map(product => {
                if (product.id === rest.id){
                    return {...product, quantity: product.quantity + quantity}
                }else return product
            })
            setCart(updatedCart)
        }
    }
        const deleteItem = id => {
            const newCart = cart.filter(product => product.id !== id)
            setCart(newCart)
        }
        const clearCart = () => {
            if (window.confirm("¿Seguro que quieres vaciar el carrito?")){
            setCart([])
            }
        }

    return (
        <CartContext.Provider value={{ cart, addItem, deleteItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}