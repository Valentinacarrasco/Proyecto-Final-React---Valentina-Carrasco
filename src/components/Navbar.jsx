import { CartWidget } from "./CartWidget"

export const Navbar = () => <>
    <nav>
        <img src="https://i.pinimg.com/736x/1c/38/52/1c38526b06e9f86aed006f262fedcfe4.jpg" alt="" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="">Tienda</a></li>
            <li><a href="">Acerca de</a></li>
        </ul>
        <CartWidget />
    </nav>

</>