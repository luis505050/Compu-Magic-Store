import React, { useState } from "react";
import "../styles/Carrusel.css";
import img1 from "../assets/imgs/carrusel/casew800h800.webp";
import img2 from "../assets/imgs/carrusel/CASE-CYBERTEL-COMMADER-CBX5009.jpg";
import img3 from "../assets/imgs/carrusel/whiteCase.webp";

// Importa Bootstrap (si no lo has hecho en otro archivo)
import 'bootstrap/dist/css/bootstrap.min.css';

const Carrusel = () => {
  const imagenes = [img1, img2, img3];
  const mensajes = [
    "Gabinete Compacto Gamer Case",
    "Gabinete CYBERTEL Commander CBX5009",
    "Gabinete Blanco con Ventilación RGB"
  ];

  const [index, setIndex] = useState(0);

  // Lógica para el siguiente y anterior
  const siguiente = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imagenes.length); // Vuelve al primer elemento cuando llega al último
  };

  const anterior = () => {
    setIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length); // Vuelve al último elemento cuando está en el primero
  };

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imagenes.map((imagen, idx) => (
          <div className={`carousel-item ${idx === index ? "active" : ""}`} key={idx}>
            <img src={imagen} className="d-block w-100" alt={`img-${idx}`} />
            <div className="carousel-caption d-none d-md-block">
              <h3>{mensajes[idx]}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Botón para la flecha de anterior */}
      <button
        className="carousel-control-prev"
        type="button"
        onClick={anterior}
        aria-label="Previous"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Botón para la flecha de siguiente */}
      <button
        className="carousel-control-next"
        type="button"
        onClick={siguiente}
        aria-label="Next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;
