import { useEffect, useState } from "react";
import "./Carousel.css"; // Importa el archivo CSS

interface Props {
  images: string[];
  autoPlay?: boolean;
  showButtons?: boolean;
}

export default function Carousel(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {  
        selectNewImage(selectedIndex, props.images);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [props.autoPlay, props.showButtons, selectedIndex, props.images]); // Añadidas dependencias completas

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  };
  return (
    <div className="carousel-container"> {/* Contenedor principal opcional */}
      <img
        src={`../../assets/photos/${selectedImage}`}
        alt="Marcelo Tenaglia photos"
        className={`carousel-img ${loaded ? "loaded" : ""}`} // Clases CSS comunes
        onLoad={() => setLoaded(true)}
      />
      <div className="carousel-button-container"> {/* Clase CSS común */}
        {props.showButtons ? (
          <>
            <button className="carousel-button" onClick={previous}>{"<"}</button> {/* Clase CSS común */}
            <button className="carousel-button" onClick={next}>{">"}</button> {/* Clase CSS común */}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}