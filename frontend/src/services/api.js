import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funciones para libros (vacías por ahora, las llenaremos después)
export const getBooks = () => api.get('/api/books');
export const getBook = (id) => api.get(`/api/books/${id}`);
export const createBook = (book) => api.post('/api/books', book);
export const updateBook = (id, book) => api.put(`/api/books/${id}`, book);
export const deleteBook = (id) => api.delete(`/api/books/${id}`);

// Funciones para reportes
export const getXMLReport = () => api.get('/api/reports/xml');
export const getStats = () => api.get('/api/reports/stats');

// Health check
export const healthCheck = () => api.get('/api/health');

export default api;
