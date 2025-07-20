import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../styles/productos.css";

import imgFuenteTeros from "../assets/imgs/fuente_teros_80plus_bronce.jpg";
import imgSSD from "../assets/imgs/kingston_480gb.jpg";
import imgRAM from "../assets/imgs/me_ram-ddr4_RGB.jpg";

const Productos = () => {
  const { agregarAlCarrito, carrito, eliminarDelCarrito } = useContext(CarritoContext);

  const productosEjemplo = [
    { id: 1, nombre: "Fuente Teros 600w", precio: 170 , imagen: imgFuenteTeros },
    { id: 2, nombre: "Disco Solido A400", precio: 150, imagen: imgSSD },
    { id: 3, nombre: "Memoria RAM DDR4 RGB", precio: 160, imagen: imgRAM },
  ];

  return (
    <div className="productos-container">
      <h2>Catálogo de Productos</h2>
      <div className="catalogo-productos">
        {productosEjemplo.map((producto) => (
          <div key={producto.id} className="card-producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio} soles</p>
            <button className="boton-agregar" onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <div className="carrito-container">
        <h2>🛒 Carrito</h2>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                {item.nombre} x {item.cantidad} — Total: ${item.precio * item.cantidad}
                <button
                  className="boton-eliminar"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Productos;
