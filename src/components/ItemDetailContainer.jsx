import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import  data from "../data/products.json";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() =>{
        new Promise((resolve,reject) =>{
            setTimeout(() => resolve(data), 1000)
        })
            .then(response => {
                const finded = response.find(i => i.id === Number(id))
            if (finded) setProduct(finded)
            else alert('no existe')
            })
            .finally(() => setLoading(false))
    }, [id])

    if(!product){
        return <p>Cargando detalles del producto...</p>
    }

    return (
        <div className="detail-container">
            <img src={product.img} alt={product.nombre} />
            <div className="detail-text">
                <h2>{product.nombre}</h2>
                <p>Categoría: {product.category}</p>
                <p>{product.detail}</p>
            </div>
        </div>
    )


}