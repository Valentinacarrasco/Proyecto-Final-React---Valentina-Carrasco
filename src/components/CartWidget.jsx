import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"



export const CartWidget = () => {
    const {cart} = useContext(CartContext)

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

    return ( 
        <div className="cart-widget">
            <Link to='/cart'>
            <i className="bi bi-cart2"></i>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
        </div>
    )
}

