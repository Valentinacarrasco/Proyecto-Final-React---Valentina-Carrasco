import { NavLink } from "react-router-dom"
import { CartWidget } from "./CartWidget"

export const Navbar = () => <>
    <nav>
        <img src="https://i.pinimg.com/736x/1c/38/52/1c38526b06e9f86aed006f262fedcfe4.jpg" alt="" />
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/category/velas'>Velas</NavLink></li>
            <li><NavLink to='/category/inciensos'>Inciensos</NavLink></li>
        </ul>
        <CartWidget />
    </nav>

</>