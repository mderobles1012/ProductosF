import { useState, useEffect } from 'react';
import { obtenerTodos, crear, actualizar, eliminar } from './services/api';
import ProductoForm from './components/ProductoForm';
import ProductoLista from './components/ProductoLista';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      const { data } = await obtenerTodos();
      setProductos(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  const manejarGuardado = async (producto) => {
    try {
      if (producto.id) {
        await actualizar(producto.id, producto);
      } else {
        await crear(producto);
      }
      setProductoEditando(null);
      cargarProductos();
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

//Bien, ya que hagamos esto lo del AWS que sea con instancias, donde haya el back y el front

  const manejarEliminacion = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este registro?')) {
      try {
        await eliminar(id);
        cargarProductos();
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
        Dashboard de Inventario AWS Editado Local
      </h1>
      
      <ProductoForm 
        productoEditando={productoEditando} 
        alGuardar={manejarGuardado} 
        alCancelar={() => setProductoEditando(null)} 
      />
      
      <hr style={{ margin: '30px 0' }} />
      
      <ProductoLista 
        productos={productos} 
        alEditar={setProductoEditando} 
        alEliminar={manejarEliminacion} 
      />
    </div>
  );
}

export default App;