import './AboutMe.css'
import { MdPersonOutline } from "react-icons/md";

interface Props {
    id?: string
}

export const AboutMe: React.FC<Props> = ({ id }) => {
    return (
        <div id={id} className='about-container'>
            <div className='about-title'>
                <MdPersonOutline className='about-icon'/>
                <h1>Sobre mí</h1>
            </div>
            <div className='aboutme-text'>
                <p>Mi nombre es Marcelo Tenaglia, pero me presento ante la gente como Tena. Me metí en el mundo de la programación en 2022 de casualidad por una carrera de dos años de <span>desarrollador web Full Stack</span> y me atrapó tanto que además de terminarla, me seguí instruyendo e hice un curso de React Js.</p>
                <p>Además del desarrollo web me sentí atraído por el <span>Análisis de Datos</span>, tanto asi que realicé un curso de Python para Data Science, donde conocí bibliotecas como Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn y otras aplicaciones como Power Bi.</p>
                <p>Actualmente me encuentro en búsqueda de mi primer oportunidad para trabajar en el mundo IT, asique si estas interesado en contactarme, no tengas duda! </p>
            </div>
        </div>
    )
}