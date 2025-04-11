import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {  
        selectNewImage(selectedIndex, images);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [props.autoPlay, props.showButtons, selectedIndex, images]);

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
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div className="carousel-container"> {/* Contenedor principal opcional */}
      <img
        src={selectedImage}
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