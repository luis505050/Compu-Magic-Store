// Productos.jsx
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../styles/productos.css";

// ✅ Importación directa de imágenes
import imgLaptop from "../assets/imgs/laptopGamer.jpg";
import imgTeclado from "../assets/imgs/teclado-mecanico.jpg";
import imgMouse from "../assets/imgs/mouseGamer.jpg";

const Productos = () => {
  const { agregarAlCarrito, carrito } = useContext(CarritoContext);

  const productosEjemplo = [
    { id: 1, nombre: "Laptop Gamer", precio: 2500, imagen: imgLaptop },
    { id: 2, nombre: "Teclado Mecánico", precio: 150, imagen: imgTeclado },
    { id: 3, nombre: "Mouse Inalámbrico", precio: 80, imagen: imgMouse },
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
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Productos;
