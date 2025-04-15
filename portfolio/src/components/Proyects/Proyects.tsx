import './Proyects.css'
import { RiCodeSSlashFill } from "react-icons/ri";

interface Props {
    id?: string 
}

export const Proyects: React.FC<Props> = ({ id }) => {
    return(
        <div id={id} className='proyect-container'>
            <div className='proyect-title'>
                <RiCodeSSlashFill className='proyect-icon'/>
                <h1>Proyectos</h1>
            </div>
        </div>
    )
}