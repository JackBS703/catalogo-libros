
---

# 📚 Sistema de Gestión de Catálogo de Libros

Sistema web full-stack para la gestión de catálogo de libros con generación de informes XML. Desarrollado con arquitectura REST y desplegado en la nube.

## 📋 Descripción

Aplicación web que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un catálogo de libros, con funcionalidad de generación de informes estadísticos en formato XML.[1][2]

## 🚀 Tecnologías y Versiones

### Backend
- **Node.js**: v22.11.1
- **Express**: v5.1.0 (Framework web)[3][4]
- **Mongoose**: v8.9.5 (ODM para MongoDB)[5][6]
- **xml2js**: v0.6.2 (Generación y parseo de XML)[1]
- **cors**: v2.8.5 (Manejo de CORS)
- **dotenv**: v16.4.5 (Variables de entorno)

**Herramientas de desarrollo:**
- **nodemon**: v3.1.4 (Auto-reload del servidor en desarrollo)

### Frontend
- **React**: v18.3.1[7][8]
- **Vite**: v6.0.1 (Build tool y dev server)[9]
- **Axios**: v1.7.7 (Cliente HTTP)
- **React Router DOM**: v6.28.0 (Enrutamiento)

### Base de Datos
- **MongoDB Atlas**: Cluster M0 (gratuito)

### Despliegue
- **Frontend**: Render Static Site
- **Backend**: Render Web Service
- **Base de datos**: MongoDB Atlas (Cloud)

## 📁 Estructura del Proyecto

```
catalogo-libros/
├── backend/
│   ├── config/           # Configuración de base de datos
│   ├── controllers/      # Lógica de negocio
│   ├── models/          # Modelos de Mongoose
│   ├── routes/          # Rutas de la API
│   ├── utils/           # Utilidades (generador XML)
│   ├── middleware/      # Middlewares personalizados
│   ├── .env             # Variables de entorno
│   ├── .gitignore
│   ├── package.json
│   └── server.js        # Punto de entrada del servidor
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── pages/       # Páginas principales
│   │   ├── services/    # Servicios API (Axios)
│   │   ├── utils/       # Utilidades del frontend
│   │   ├── App.jsx      # Componente principal
│   │   └── main.jsx     # Punto de entrada
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
- Node.js v20.19+ o v22.x[10]
- npm v10+
- Cuenta en MongoDB Atlas
- Git instalado

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/catalogo-libros.git
cd catalogo-libros
```

### 2. Configurar el Backend

```bash
# Navegar a la carpeta backend
cd backend

# Instalar dependencias
npm install

# Crear archivo .env con las siguientes variables
# (copia .env.example si existe)
```

**Contenido del archivo `.env`:**
```env
PORT=5000
MONGODB_URI=tu_connection_string_de_mongodb_atlas
NODE_ENV=development
```

### 3. Configurar el Frontend

```bash
# Desde la raíz del proyecto
cd ../frontend

# Instalar dependencias
npm install
```

**Configurar URL del backend:**
Crea un archivo `.env` en la carpeta `frontend`:
```env
VITE_API_URL=http://localhost:5000
```

## 🏃‍♂️ Ejecutar en Desarrollo

### Iniciar el Backend

```bash
cd backend
npm run dev
```
El servidor estará corriendo en: `http://localhost:5000`

### Iniciar el Frontend

```bash
cd frontend
npm run dev
```
La aplicación estará disponible en: `http://localhost:5173`

## 🔌 Endpoints de la API

### Libros (CRUD)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/books` | Obtener todos los libros |
| GET | `/api/books/:id` | Obtener un libro por ID |
| POST | `/api/books` | Crear un nuevo libro |
| PUT | `/api/books/:id` | Actualizar un libro existente |
| DELETE | `/api/books/:id` | Eliminar un libro |

### Informes XML

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/reports/xml` | Generar informe XML completo |
| GET | `/api/reports/stats` | Obtener estadísticas en JSON |
| GET | `/api/reports/download` | Descargar archivo XML |

## 📊 Modelo de Datos

### Libro (Book)

```javascript
{
  titulo: String (requerido),
  autor: String (requerido),
  isbn: String (requerido, único),
  genero: String (requerido),
  anioPublicacion: Number (requerido),
  editorial: String,
  numeroPaginas: Number,
  descripcion: String,
  fechaRegistro: Date (auto-generado)
}
```

## 📦 Scripts Disponibles

### Backend
```bash
npm start          # Inicia el servidor en modo producción
npm run dev        # Inicia el servidor con nodemon (desarrollo)
```

### Frontend
```bash
npm run dev        # Inicia el servidor de desarrollo de Vite
npm run build      # Genera el build de producción
npm run preview    # Previsualiza el build de producción
```

## 🌐 Despliegue en Render

### Backend
1. Conectar repositorio de GitHub a Render
2. Crear un **Web Service**
3. Configurar variables de entorno (MONGODB_URI, NODE_ENV=production)
4. Build command: `cd backend && npm install`
5. Start command: `cd backend && npm start`

### Frontend
1. Crear un **Static Site** en Render
2. Build command: `cd frontend && npm install && npm run build`
3. Publish directory: `frontend/dist`
4. Agregar variable de entorno: `VITE_API_URL=URL_de_tu_backend`

## 🔒 Variables de Entorno

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
NODE_ENV=production
```

### Frontend (.env)
```env
VITE_API_URL=https://tu-backend.onrender.com
```

## 🎯 Funcionalidades Principales

- ✅ CRUD completo de libros
- ✅ Validación de datos
- ✅ Generación de informes XML con estadísticas
- ✅ Visualización de árbol XML en el frontend[2]
- ✅ Cálculo de totales y porcentajes por género[2]
- ✅ Interfaz responsive con React
- ✅ API RESTful con Express
- ✅ Despliegue en la nube (trabajo independiente)[2]

## 👥 Autores

[Tu nombre y el de tu compañero/a]

## 📅 Fecha de Entrega

18 de noviembre de 2025[2]

## 📄 Licencia

Este proyecto es de uso académico para la asignatura de Aplicaciones y Tendencias.

***

**Nota**: Este proyecto fue desarrollado con fines educativos como parte de la entrega del curso de Aplicaciones y Tendencias.[2]

***

[1](https://ironpdf.com/nodejs/blog/node-help/xml2js-npm/)
[2](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/67191826/c184d55c-48ad-44a2-b01e-a09325ac9cc0/image.jpg)
[3](https://expressjs.com/en/changelog/)
[4](https://www.npmjs.com/package/express)
[5](https://mongoosejs.com/docs/version-support.html)
[6](https://www.opswat.com/blog/technical-discovery-mongoose-cve-2025-23061-cve-2024-53900)
[7](https://dev.to/sovannaro/react-18-vs-react-19-key-differences-to-know-for-2025-1614)
[8](https://pieces.app/blog/react-18-a-comprehensive-guide-to-the-latest-features-and-updates)
[9](https://vite.dev/guide/)
[10](https://github.com/expressjs/express/releases)
[11](https://endoflife.date/express)
[12](https://www.infoq.com/news/2025/01/express-5-released/)
[13](https://expressjs.com)