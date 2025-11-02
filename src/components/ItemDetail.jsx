import { useContext } from "react"
import { ItemCount } from "./ItemCount"
import { CartContext } from "../context/CartContext"


export const ItemDetail = ({ product }) => {
    const {addItem} = useContext(CartContext)

    const onAdd = quantity => addItem(product, quantity)

    return (
        <div className="detail-container">
            <img src={product.img} alt={product.product} />
            <div className="detail-text">
                <h2>{product.product}</h2>
                <p className="detail-category"><strong>Categoría:</strong> {product.category}</p>
                <p className="detail-description"><strong>Descripción:</strong> {product.description}</p>
                <p className="detail-price"><strong>Precio:</strong> ${product.price}</p>
                <p className="detail-stock"><strong>Stock disponible:</strong> {product.stock}</p>
            </div>
            <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
    )
}


