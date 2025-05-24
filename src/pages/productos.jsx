const Productos = () => {
  const productosEjemplo = [
    { id: 1, nombre: "Laptop Gamer", precio: 2500, imagen: "https://via.placeholder.com/150" },
    { id: 2, nombre: "Teclado Mecánico", precio: 150, imagen: "https://via.placeholder.com/150" },
    { id: 3, nombre: "Mouse Inalámbrico", precio: 80, imagen: "https://via.placeholder.com/150" },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Catálogo de Productos</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {productosEjemplo.map((producto) => (
          <div key={producto.id} style={{ border: "1px solid #2B2B2B", borderRadius: "8px", padding: "1rem", backgroundColor: "#2B2B2B", color: "#fff", width: "180px" }}>
            <img src={producto.imagen} alt={producto.nombre} style={{ width: "100%", borderRadius: "4px" }} />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button style={{ backgroundColor: "#1561F0", border: "none", color: "white", padding: "0.5rem", borderRadius: "4px", cursor: "pointer" }}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
