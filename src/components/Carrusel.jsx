import React, { useState } from "react";
import "../styles/carrusel.css"
import img1 from "../assets/imgs/carrusel/casew800h800.webp";
import img2 from "../assets/imgs/carrusel/CASE-CYBERTEL-COMMADER-CBX5009.jpg";
import img3 from "../assets/imgs/carrusel/whiteCase.webp";


const Carrusel = () => {
  const imagenes = [img1, img2, img3];
  const mensajes = [
    "Gabinete Compacto Gamer Case",
    "Gabinete CYBERTEL Commander CBX5009",
    "Gabinete Blanco con Ventilación RGB"
  ];

  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
      <div className="carrusel">
          <button className="carrusel-btn" onClick={anterior}>‹</button>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%" }}>
              <img src={imagenes[index]} alt={`img-${index}`} className="carrusel-img" />
              <div className="carrusel-mensaje">
                  <h3>{mensajes[index]}</h3>
              </div>
          </div>
      <button className="carrusel-btn" onClick={siguiente}>›</button>
    </div>
  );
};


export default Carrusel;