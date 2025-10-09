import imgError from '../assets/confused.png'
import { Link } from "react-router-dom" 

export const Error404 = () => 
    <div className="error">
        <img src={imgError} alt="" />
        <div>
        <h1>Ups! No encontramos lo que estás buscando.</h1>
        <Link to='/'>
            <button>Volver al inicio</button>
        </Link>
        </div>


    </div>