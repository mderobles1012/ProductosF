function ProductoLista({ productos, alEditar, alEliminar }) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre} (${producto.stock})</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precio}</td>
              <td>
                <button 
                  onClick={() => alEditar(producto)} 
                  style={{ marginRight: '10px', backgroundColor: '#ffd700', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
                  Editar
                </button>
                <button 
                  onClick={() => alEliminar(producto.id)} 
                  style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductoLista;