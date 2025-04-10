import './AboutMe.css'
import { MdPersonOutline } from "react-icons/md";


export const AboutMe = () => {
    return (
        <div className='about-container'>
            <div className='about-title'>
                <MdPersonOutline className='about-icon'/>
                <h1>Sobre mí</h1>
            </div>
        </div>
    )
}