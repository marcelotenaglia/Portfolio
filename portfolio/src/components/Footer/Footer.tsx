import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='copy-container'>
                <p className='copyright'>© 2025. Casi todos los derechos reservados</p>
            </div>
            <div className='contact-container'>
            <Link to='/AboutMe'>Sobre mí</Link>
            <Link to='https://www.linkedin.com/in/marcelo-tenaglia-0a473b294/'>Contacto</Link>
            </div>
        </div>
    )
}