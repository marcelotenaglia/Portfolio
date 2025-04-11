import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar-container">
            <button className="menu-button" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to='' onClick={() => setIsMenuOpen(false)}>Experiencia</Link>
                <Link to='' onClick={() => setIsMenuOpen(false)}>Proyectos</Link>
                <Link to='' onClick={() => setIsMenuOpen(false)}>Sobre mí</Link>
                <Link to='' onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            </div>
        </div>
    );
}