import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const refCollection = id ? query(collection(db, 'products'), where('category', '==', id)) : collection(db, 'products')

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) {
                setProducts([])
            } else {
                setProducts(snapshot.docs.map((doc) => ({
                    id: doc.id, ...doc.data()}
                )))
            }
        })
            .catch((error) => console.log('cargando productos', error))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <p>Cargando productos...</p>

    return (
        <div className="product-container">
            {products.map(product => (
                <div className="card" key={product.id}>
                    <img src={product.img} alt={product.product} />
                    <h3>{product.product}</h3>
                    <p>{product.description}</p>
                    <p>Categoría: {product.category}</p>
                    <Link to={`/detail/${product.id}`}>
                        <button>Ver detalles</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}


