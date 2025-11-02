import { useState } from "react";

export const ItemCount = ({ stock, onAdd, initial }) => {
    const [counter, setCounter] = useState(initial ?? 1)
    const [added, setAdded] = useState(false)

    const handleIncreaseCount = () => {
        if (stock > counter) setCounter(counter + 1)
    }
    const handleDecreaseCount = () => {
        if (counter > 1) setCounter(counter - 1)
    }

    const handleAdd = () => {
        onAdd(counter)
        setAdded(true)
        setCounter(1)
        setTimeout(() => setAdded(false), 2000);
    }

    return (
        <div className="item-count">
            <div className="controls">
                <button onClick={handleDecreaseCount} disabled={counter === 1}>-</button>
                <span>{counter}</span>
                <button onClick={handleIncreaseCount} disabled={counter === stock}>+</button>
            </div>
            <button onClick={handleAdd} disabled={stock === 0 || counter === 0} >
                Agregar al carrito
            </button>
            {added && <p><i class="bi bi-check2-circle"></i>Agregado al carrito</p>}
            {stock === 0 && <p>Sin stock disponible</p>}
        </div>
    )
} 