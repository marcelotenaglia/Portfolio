import { useEffect, useState, useCallback } from "react";
import "./Carousel.css"; // Importa el archivo CSS
import image1 from '../../assets/photos/1.png';
import image2 from '../../assets/photos/2.png';
import image3 from '../../assets/photos/3.png';

interface Props {
  autoPlay?: boolean;
  showButtons?: boolean;
}

export default function Carousel(props: Props) {
  const images = [image1, image2, image3];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = useCallback((index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  }, [selectedIndex]);

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {  
        selectNewImage(selectedIndex, images);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [props.autoPlay, props.showButtons, selectedIndex, images, selectNewImage]);

  const previous = useCallback(() => {
    selectNewImage(selectedIndex, images, false);
  }, [selectedIndex, images, selectNewImage]);

  const next = useCallback(() => {
    selectNewImage(selectedIndex, images);
  }, [selectedIndex, images, selectNewImage]);

  return (
    <div className="carousel-container"> {/* Contenedor principal opcional */}
      <img
        src={selectedImage}
        alt={`Imagen ${selectedIndex + 1} del carrusel`}
        className={`carousel-img ${loaded ? "loaded" : ""}`} // Clases CSS comunes
        onLoad={() => setLoaded(true)}
        loading="lazy"
        width="500"
        height="250"
      />
      <div className="carousel-button-container"> {/* Clase CSS común */}
        {props.showButtons ? (
          <>
            <button 
              className="carousel-button" 
              onClick={previous}
              aria-label="Imagen anterior"
            >
              {"<"}
            </button> {/* Clase CSS común */}
            <button 
              className="carousel-button" 
              onClick={next}
              aria-label="Imagen siguiente"
            >
              {">"}
            </button> {/* Clase CSS común */}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}