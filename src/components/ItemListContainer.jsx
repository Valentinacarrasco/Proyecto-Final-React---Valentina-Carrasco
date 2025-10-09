import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import data from '../data/products.json'

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => resolve(data), 1000)
        })
            .then(response => {
                if (!id) {
                    setProducts(response)
                } else {
                    const filtered = response.filter(i => i.category === id)
                    setProducts(filtered)
                }
            })
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <p>Cargando productos...</p>

    return (
        <div className="product-container">
            {products.map(product =>(
                <div className="card" key={product.id}>
                    <img src={product.img} alt={product.nombre} />
                    <h3>{product.nombre}</h3>
                    <p>{product.detail}</p>
                    <p>Categoría: {product.category}</p>
                    <Link to={`/detail/${product.id}`}>
                        <button>Ver detalles</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}


