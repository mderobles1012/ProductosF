import axios from 'axios';

const API_URL = 'http://44.211.140.78:5000/productos';

export const obtenerTodos = () => axios.get(API_URL);
export const crear = (producto) => axios.post(API_URL, producto);
export const actualizar = (id, producto) => axios.put(`${API_URL}/${id}`, producto);
export const eliminar = (id) => axios.delete(`${API_URL}/${id}`);