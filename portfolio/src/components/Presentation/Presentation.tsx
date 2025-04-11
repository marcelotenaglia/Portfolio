import './Presentation.css'
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';
import profile from '../../assets/photos/fotoPerfil-removebg-preview.png'
import Carousel from '../Carousel/Carousel';

export const Presentation = () => {
    return (
        <div className='presentation-container'>
            <img src={profile} alt="foto-perfil" className='profile-pic'/>
            <h1 className='phrase'>Buenas, soy Marcelo</h1>
            <div className='carousel'>
                <Carousel autoPlay={true} showButtons={false}/>
            </div>
            <p className='studies'>Desarrolador Web, Analista de Datos <br /> <span>Soy de San Cayetano, Buenos Aires, Argentina</span></p>
            <div className='social-container'>
                <p className='social'>@Social</p>
                <div className='button-container'>
                    <Link to='https://github.com/marcelotenaglia'>
                       <button className='button'>
                            <VscGithubAlt className='social-logo'/>
                            <p className='p-button'>Github</p>
                        </button>
                     </Link>
                     <Link to='https://www.linkedin.com/in/marcelo-tenaglia-0a473b294/'>
                        <button className='button'>
                            <AiOutlineLinkedin className='social-logo'/>
                            <p className='p-button'>LinkedIn</p>
                        </button>
                    </Link>
                </div>
            </div>   
        </div>
    )
}