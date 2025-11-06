import { useState, useEffect } from 'react';
import './App.css';
import { healthCheck } from './services/api';

function App() {
  const [status, setStatus] = useState('Conectando...');
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await healthCheck();
        setStatus(`✅ Backend conectado: ${response.data.status}`);
        setIsConnected(true);
        setError(null);
      } catch (err) {
        setStatus('❌ Error al conectar con el backend');
        setIsConnected(false);
        setError(err.message);
      }
    };

    checkBackend();
  }, []);

  return (
    <div className="App">
      <h1>
        📚 Sistema de Gestión de Catálogo de Libros
      </h1>
      
      <div className="status-card">
        <h2>Estado de la Conexión</h2>
        <p className={isConnected ? 'success' : 'error'}>
          {status}
        </p>
        {error && (
          <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '10px' }}>
            Error: {error}
          </p>
        )}
      </div>
      
      <div className="info">
        <p>
          <strong>Frontend</strong>: http://localhost:5173
        </p>
        <p>
          <strong>Backend</strong>: http://localhost:5000
        </p>
        <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.9 }}>
          ✨ Sistema listo para desarrollo
        </p>
      </div>
    </div>
  );
}

export default App;
