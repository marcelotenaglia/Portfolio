import { Link } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to=''>Experiencia</Link>
            <Link to=''>Proyectos</Link>
            <Link to=''>Sobre mí</Link>
            <Link to=''>Contacto</Link>
            <Link to=''></Link>
        </div>
    )
}