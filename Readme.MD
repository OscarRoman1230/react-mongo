# 📌 Proyecto de Gestión de Precios Especiales

Este proyecto es una aplicación web desarrollada con **Node.js**, **Express**, **MongoDB** en el backend y **React**, **Zustand** y **Tailwind CSS** en el frontend. Permite gestionar productos, usuarios y asignar precios especiales a determinados clientes.

---

## 📌 **Tecnologías Utilizadas**
### **Backend:**
- **Node.js y Express** → Framework ligero y escalable para el backend.
- **MongoDB con Mongoose** → Base de datos NoSQL para manejar productos y precios especiales.

### **Frontend:**
- **React** → Biblioteca para construir interfaces de usuario dinámicas y escalables.
- **Zustand** → Manejo eficiente del estado global en el frontend.
- **Tailwind CSS** → Framework de CSS para un diseño moderno y responsive.

---

## 📌 **Estructura del Proyecto**
```
📂 backend-mongo/
 ├── 📂 config/               # Configuración de la base de datos
 ├── 📂 models/               # Modelos de MongoDB
 ├── 📂 services/             # Lógica de negocio
 ├── 📂 controllers/          # Controladores de las rutas
 ├── 📂 routes/               # Definición de endpoints
 ├── server.js               # Servidor principal de Express

📂 frontend-react/
 ├── 📂 src/
 │    ├── 📂 pages/           # Páginas principales (Artículos, Subida de precios)
 │    ├── 📂 store/           # Estado global con Zustand
 │    ├── App.jsx            # Componente principal de React
 │    ├── main.jsx           # Punto de entrada de la aplicación
 │    ├── index.css          # Estilos globales con Tailwind CSS
 ├── package.json            # Dependencias del frontend
```

---

## 📌 **Configuración del Proyecto**

### **1️⃣ Backend**
#### **Instalar dependencias**
```sh
cd backend-mongo
npm install
```
#### **Configurar variables de entorno**
Crear un archivo `.env` en `backend-mongo` y definir:
```env
PORT=5000
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/tienda
```
#### **Ejecutar el servidor**
```sh
npm run dev
```

### **2️⃣ Frontend**
#### **Instalar dependencias**
```sh
cd frontend-react
npm install
```
#### **Ejecutar la aplicación**
```sh
npm run dev
```

---

## 📌 **Decisiones Técnicas**

### **¿Por qué usamos JavaScript?**
- **Lenguaje universal** → Tanto el frontend como el backend pueden estar en JS, lo que simplifica el desarrollo.
- **Gran ecosistema** → Express, React, y muchas herramientas están optimizadas para JavaScript.
- **Escalabilidad** → JS permite un crecimiento modular y flexible del proyecto.

### **¿Por qué configuramos el proyecto de esta manera?**
- **Separación de responsabilidades** → Utilizamos controladores, servicios y modelos en el backend para un código más limpio.
- **Zustand en lugar de Redux** → Es más ligero y fácil de usar para el manejo de estado.
- **Tailwind CSS** → Facilita un diseño moderno y responsive sin necesidad de escribir CSS desde cero.

---

## 📌 **Endpoints Principales**
### **Productos**
- `GET /api/productos` → Obtener todos los productos.

### **Precios Especiales**
- `GET /api/precios-especiales/:usuarioId` → Obtener precios especiales por usuario.
- `POST /api/precios-especiales` → Asignar precios especiales a un usuario.

---

