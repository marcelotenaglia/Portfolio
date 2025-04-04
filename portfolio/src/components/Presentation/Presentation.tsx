import './Presentation.css'
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const Presentation = () => {
    return (
        <div className='presentation-container'>
            <h1>Buenas, soy Marcelo</h1>
            <p className='studies'>Desarrolador Web, Analista de Datos</p>
            <p>Soy de San Cayetano, Buenos Aires, Argentina </p>
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