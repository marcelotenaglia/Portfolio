import { Link } from 'react-router-dom';
import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
    return (
        <Link to={link} className="project-card" target="_blank" rel="noopener noreferrer">
            <div className="project-image-container">
                <img 
                    src={image} 
                    alt={`Imagen del proyecto ${title}`} 
                    className="project-image"
                    loading="lazy"
                />
            </div>
            <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </div>
        </Link>
    );
}; 