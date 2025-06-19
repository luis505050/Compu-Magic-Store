import React, { useState } from "react";
import "../styles/Carrusel.css";
import img1 from "../assets/imgs/carrusel/casew800h800.webp";
import img2 from "../assets/imgs/carrusel/CASE-CYBERTEL-COMMADER-CBX5009.jpg";
import img3 from "../assets/imgs/carrusel/whiteCase.webp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa los íconos

const Carrusel = () => {
  const imagenes = [img1, img2, img3];
  const mensajes = [
    "Gabinete Compacto Gamer Case",
    "Gabinete CYBERTEL Commander CBX5009",
    "Gabinete Blanco con Ventilación RGB"
  ];

  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imagenes.map((imagen, idx) => (
          <div className={`carousel-item ${idx === index ? "active" : ""}`} key={idx}>
            <img src={imagen} className="d-block w-100" alt={`img-${idx}`} />
            <div className="carousel-caption">
              <h3>{mensajes[idx]}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Flecha izquierda */}
      <button
        className="carousel-control-prev carrusel-btn"
        type="button"
        onClick={anterior}
        aria-label="Previous"
      >
        <i className="bi bi-caret-left-fill carrusel-icon"></i>
      </button>

      {/* Flecha derecha */}
      <button
        className="carousel-control-next carrusel-btn"
        type="button"
        onClick={siguiente}
        aria-label="Next"
      >
        <i className="bi bi-caret-right-fill carrusel-icon"></i>
      </button>
    </div>
  );
};

export default Carrusel;
