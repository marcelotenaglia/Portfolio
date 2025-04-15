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
                <a href='#experience' onClick={() => setIsMenuOpen(false)}>Experiencia</a>
                <a href='#proyects' onClick={() => setIsMenuOpen(false)}>Proyectos</a>
                <a href='#aboutme' onClick={() => setIsMenuOpen(false)}>Sobre mí</a>
                <Link to='https://www.linkedin.com/in/marcelo-tenaglia-0a473b294/' onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            </div>
        </div>
    );
}