# API REST de Productos - Node.js + Firebase

API REST para gestión de productos desarrollada con **Node.js**, **Express** y **Firebase Firestore**.
El proyecto implementa una arquitectura por capas, autenticación mediante **JWT** y conexión con una base de datos en la nube.

## Tecnologías utilizadas

* Node.js
* Express.js
* Firebase Firestore
* JWT (JSON Web Token)
* CORS
* Body Parser
* dotenv
* ESModules

## Funcionalidades

* Servidor Express configurado.
* Variables de entorno mediante `.env`.
* CORS habilitado para consumo desde aplicaciones frontend.
* Manejo de peticiones JSON.
* Arquitectura separada por capas:

  * Routes
  * Controllers
  * Services
  * Models
  * Middleware

## Productos (CRUD)

La API permite:

* Obtener todos los productos:

```
GET /api/products
```

* Obtener un producto por ID:

```
GET /api/products/:id
```

* Crear productos:

```
POST /api/products/create
```

* Eliminar productos:

```
DELETE /api/products/:id
```

Los productos se almacenan en **Firebase Firestore**.

Ejemplo de estructura:

```json
{
  "nombre": "Laptop Gamer",
  "precio": 1200.99,
  "stock": 5,
  "categoria": "Electronica"
}
```

## Autenticación

Cuenta con login mediante JWT:

```
POST /auth/login
```

Genera un token Bearer para acceder a rutas protegidas.

Ejemplo:

```
Authorization: Bearer <token>
```

## Firebase

El proyecto está conectado a Firebase Firestore mediante una configuración separada.

Incluye un script de carga inicial (`seed.js`) para insertar productos de prueba automáticamente.

Ejecutar:

```bash
node seed.js
```

## Estructura del proyecto

src/

* config/
* controllers/
* middleware/
* models/
* routes/
* services/
* seed.js

## Objetivo

Proyecto realizado para implementar una API backend completa con autenticación, persistencia en la nube y buenas prácticas de organización de código.
