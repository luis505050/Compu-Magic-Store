import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Productos = () => {
  const { agregarAlCarrito, carrito } = useContext(CarritoContext); // 👈 incluimos 'carrito'

  const productosEjemplo = [
    { id: 1, nombre: "Laptop Gamer", precio: 2500, imagen: "src/assets/imgs/laptopGamer.jpg" },
    { id: 2, nombre: "Teclado Mecánico", precio: 150 , imagen: "src/assets/imgs/teclado-mecanico.jpg" },
    { id: 3, nombre: "Mouse Inalámbrico", precio: 80, imagen: "src/assets/imgs/mouseGamer.jpg" },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Catálogo de Productos</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {productosEjemplo.map((producto) => (
          <div
            key={producto.id}
            style={{
              border: "1px solid #2B2B2B",
              borderRadius: "8px",
              padding: "1rem",
              backgroundColor: "#2B2B2B",
              color: "#fff",
              width: "180px",
            }}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{ width: "100%", borderRadius: "4px" }}
            />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio} soles</p>
            <button
              style={{
                backgroundColor: "#1561F0",
                border: "none",
                color: "white",
                padding: "0.5rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* 👇 Carrito visual */}
      <div style={{ marginTop: "2rem", backgroundColor: "#dcd3d1", padding: "1rem", borderRadius: "8px" }}>
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
