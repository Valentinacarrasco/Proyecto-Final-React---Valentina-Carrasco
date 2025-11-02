import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const refDoc = doc(db, 'products', id)

        getDoc(refDoc).then(snapshot =>
            setProduct({ id: snapshot.id, ...snapshot.data() })
        )

            .catch((error) => console.error("Error cargando producto:", error))
            .finally(() => setLoading(false));
    }, [id])

    if (!product) return <p>Cargando detalles del producto...</p>

    return (
        <ItemDetail product={product} />
    )
}

