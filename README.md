
---

# 📚 BookAnalytics

Sistema web full-stack para la gestión de catálogo de libros con generación de informes XML. Desarrollado con arquitectura REST y desplegado en la nube.

## 📋 Descripción

El presente proyecto consiste en el desarrollo de un sistema web de gestión de catálogo de libros utilizando arquitectura de servicios web REST y computación en la nube. El sistema permitirá realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos de libros, además de generar informes en formato XML que muestren estadísticas del catálogo como totales y porcentajes por categoría. La solución se implementará con Node.js y Express para el backend, React para el frontend, MongoDB Atlas como base de datos en la nube, y se desplegará completamente en servicios cloud públicos mediante Render. Como componente de aprendizaje independiente, se utilizará render y vercel para realizar el despliegue más vite para el front.

## 🚀 Tecnologías y Versiones

### Backend
- **Node.js**: v22.21.1
- **Express**: v5.1.0 (Framework web)
- **Mongoose**: v8.9.5 (ODM para MongoDB)
- **xml2js**: v0.6.2 (Generación y parseo de XML)
- **cors**: v2.8.5 (Manejo de CORS)
- **dotenv**: v16.4.5 (Variables de entorno)

**Herramientas de desarrollo:**
- **nodemon**: v3.1.4 (Auto-reload del servidor)

### Frontend
- **React**: v18.3.1
- **Vite**: v6.0.1 (Build tool)
- **Axios**: v1.7.7 (Cliente HTTP)
- **React Router DOM**: v6.28.0 (Enrutamiento)

### Base de Datos
- **MongoDB Atlas**: Cluster M0 (gratuito)

### Despliegue
- **Frontend**: Vercel
- **Backend**: Render Web Service

## 📁 Estructura del Proyecto

```
catalogo-libros/
├── backend/
│   ├── config/
│   │   └── db.js           # Configuración de conexión a MongoDB
│   ├── controllers/        # Lógica de negocio (CRUD, informes)
│   ├── models/            # Esquemas de Mongoose
│   ├── routes/            # Rutas de la API REST
│   ├── utils/             # Utilidades (generador XML)
│   ├── middleware/        # Middlewares personalizados
│   ├── .env               # Variables de entorno
│   ├── .gitignore
│   ├── package.json
│   └── server.js          # Punto de entrada
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas principales
│   │   ├── services/      # Servicios API (Axios)
│   │   ├── utils/         # Utilidades
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Instalación y Configuración

### Requisitos Previos
- Node.js v20.19+ o v22.x
- npm v10+
- Cuenta en MongoDB Atlas
- Git instalado

### 1. Clonar el repositorio

```
git clone https://github.com/JackBS703/catalogo-libros.git
cd catalogo-libros
```

### 2. Configurar MongoDB Atlas

1. Ve a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Crea una cuenta y un cluster M0 (gratuito)
3. Crea un usuario de base de datos
4. Obtén el connection string
5. Agrega acceso desde `0.0.0.0/0` en Network Access

### 3. Configurar el Backend

```
cd backend

# Instalar dependencias
npm install

# Crear archivo .env
```

**Contenido del `backend/.env`:**
```
PORT=5000
MONGODB_URI=mongodb+srv://usuario:password@cluster.xxxxx.mongodb.net/catalogo-libros?retryWrites=true&w=majority
NODE_ENV=development
```

### 4. Configurar el Frontend

```
cd ../frontend

# Instalar dependencias
npm install
```

**Crear `frontend/.env`:**
```
VITE_API_URL=http://localhost:5000
```

## Ejecutar en Desarrollo

### Terminal 1 - Backend

```
cd backend
npm run dev
```

Esperado:
```
MongoDB conectado: cluster0-xxxxx.mongodb.net
Servidor corriendo en http://localhost:5000
```

### Terminal 2 - Frontend

```
cd frontend
npm run dev
```

Esperado:
```
VITE v6.0.1  ready in XXX ms
➜  Local:   http://localhost:5173/
```

### Abrir en el navegador

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000 (API)

## 📦 Scripts Disponibles

### Backend
```
npm start          # Inicia el servidor en modo producción
npm run dev        # Inicia con nodemon (desarrollo)
```

### Frontend
```
npm run dev        # Inicia servidor de desarrollo
npm run build      # Genera build de producción
npm run preview    # Previsualiza build de producción
```

## 🌐 Despliegue en Render

### Backend
1. Conectar repositorio de GitHub a Render
2. Crear un **Web Service**
3. Build command: `cd backend && npm install`
4. Start command: `cd backend && npm start`
5. Variables de entorno:
   - `MONGODB_URI`: Tu connection string
   - `NODE_ENV`: `production`

### Frontend
1. Crear un **Static Site** en Render
2. Build command: `cd frontend && npm install && npm run build`
3. Publish directory: `frontend/dist`
4. Variable de entorno:
   - `VITE_API_URL`: URL de tu backend en Render

## 📝 Estado del Proyecto

### ✅ Completado
- [x] Configuración inicial del proyecto
- [x] Backend y Frontend conectados
- [x] Conexión a MongoDB Atlas establecida
- [x] Interfaz de prueba con estado de conexión
- [x] Diseño mejorado de la página de inicio
- [x] Modelo de Libro (Mongoose schema)
- [x] ontroladores CRUD
- [x] Rutas de API REST
- [x] Componentes React para formulario de libros
- [x] Componentes React para listar libros
- [x] Sistema de informes XML
- [x] Visualización de árbol XML
- [x] Cálculo de estadísticas
- [x] Despliegue en Render

## 🚀 Demo en Producción

- **Frontend (Vercel):** [https://catalogo-libros-eta.vercel.app/](https://catalogo-libros-eta.vercel.app/)
- **Backend (Render):** [https://catalogo-backend-kca0.onrender.com/](https://catalogo-backend-kca0.onrender.com/)

## 👥 Autores
- Mateo Berrio Cardona
- Mariana Montoya Sepúlveda

## 📅 Fecha de Entrega

18 de noviembre de 2025

## 📄 Licencia

Proyecto académico para la asignatura de Programacion Distribuida y Paralela.

---

**Nota**: Este proyecto fue desarrollado como entrega académica para demostrar conocimientos en arquitectura web, servicios REST y computación en la nube.
