import { Navbar } from "../components/Navbar";
import { ItemListContainer } from "../components/ItemListContainer";
import { useEffect } from "react";

export const Home = () => {
    useEffect(() => {
        document.title = 'Solstice | Inicio'
    }, [])
    
    return (
        <>
        <Navbar/>
        <ItemListContainer/>
        </>
    )
}