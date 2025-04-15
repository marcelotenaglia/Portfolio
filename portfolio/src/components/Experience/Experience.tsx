import './Experience.css'
import { MdShoppingBag } from "react-icons/md";

interface Props {
    id?: string
}

export const Experience: React.FC<Props> = ({ id }) => {
    return (
        <div id={id} className="exp-container">
            <div className='title-container'>
                <MdShoppingBag className='exp-icon'/>
                <h1>Experiencia laboral</h1>
            </div>
            <p>Aquí pondría mi experiencia. SI TUVIERA UNA 😂</p>
        </div>
    )
}