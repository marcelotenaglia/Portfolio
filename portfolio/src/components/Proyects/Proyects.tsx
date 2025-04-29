import './Proyects.css'
import { RiCodeSSlashFill } from "react-icons/ri";
import { ProjectCard } from './ProjectCard';
import proyect1 from '../../assets/photos/dashboard.png';

interface Props {
    id?: string
}

export const Proyects: React.FC<Props> = ({id}) => {
    const projects = [
        {
            title: "Análisis precios gas",
            description: "Proyecto de Análisis de Datos basado en precios de gas natural en Argentina en el período enero 2019-junio 2019.",
            image: proyect1,
            link: "https://github.com/marcelotenaglia/precios_gas"
        }
        // Aquí puedes agregar más proyectos
    ];

    return (
        <div id={id} className='proyect-container'>
            <div className='proyect-title'>
                <RiCodeSSlashFill className='proyect-icon'/>
                <h1>Proyectos</h1>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}