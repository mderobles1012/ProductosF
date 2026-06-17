import { useState, useEffect } from 'react';

const estadoInicial = { nombre: '', descripcion: '', precio: '', stock: '' };

function ProductoForm({ productoEditando, alGuardar, alCancelar }) {
  const [formulario, setFormulario] = useState(estadoInicial);

  // Escuchar si nos pasan un producto para editar
  useEffect(() => {
    if (productoEditando) {
      setFormulario(productoEditando);
    } else {
      setFormulario(estadoInicial);
    }
  }, [productoEditando]);

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    alGuardar(formulario);
    setFormulario(estadoInicial);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{productoEditando ? 'Editar Producto' : 'Nuevo Producto'}</h2>
      <form onSubmit={manejarEnvio}>
        <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={manejarCambio} required style={{ marginRight: '10px' }} />
        <input type="text" name="descripcion" placeholder="Descripción" value={formulario.descripcion} onChange={manejarCambio} style={{ marginRight: '10px' }} />
        <input type="number" name="precio" placeholder="Precio" value={formulario.precio} onChange={manejarCambio} required step="0.01" style={{ marginRight: '10px' }} />
        <input type="number" name="stock" placeholder="Stock" value={formulario.stock} onChange={manejarCambio} required style={{ marginRight: '10px' }} />
        
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>
          {productoEditando ? 'Actualizar' : 'Agregar'}
        </button>
        
        {productoEditando && (
          <button type="button" onClick={alCancelar} style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default ProductoForm;