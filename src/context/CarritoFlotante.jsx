import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { ShoppingCart } from "lucide-react";
import "../styles/CarritoFlotante.css"; // Asegúrate de tener este archivo

const CarritoFlotante = () => {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);
  const [visible, setVisible] = useState(false);

  const cantidadTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  return (
    <div>
      {/* Ícono flotante accesible */}
      <button
        className="carrito-icono"
        onClick={() => setVisible(!visible)}
        aria-label="Ver carrito"
      >
        <ShoppingCart color="white" />
        {cantidadTotal > 0 && (
          <div className="carrito-badge">{cantidadTotal}</div>
        )}
      </button>

      {/* Panel con productos */}
      {visible && (
        <div className="carrito-panel">
          <h3>Carrito</h3>
          {carrito.length === 0 ? (
            <p>No hay productos.</p>
          ) : (
            carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <div>
                  <strong>{item.nombre}</strong>
                  <p>Cant: {item.cantidad}</p>
                </div>
                <button
                  onClick={() => eliminarDelCarrito(item.id)}
                  className="eliminar-btn"
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CarritoFlotante;
