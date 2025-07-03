
# 📄 **Documentación Esencial de Express (Node.js)**

---

## ✅ **¿Qué es Express?**

**Express** es un framework minimalista y flexible para Node.js que facilita la creación de servidores web y APIs. Es muy popular por su sencillez y rapidez.

---

## ✅ **Instalación**

```bash
npm install express
```

---

## ✅ **Estructura Básica**

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para parsear JSON

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

## ✅ **Rutas Comunes**

| Método   | Descripción                 | Ejemplo                              |
| -------- | --------------------------- | ------------------------------------ |
| `GET`    | Obtener información         | `app.get('/users', callback)`        |
| `POST`   | Enviar/crear datos          | `app.post('/users', callback)`       |
| `PUT`    | Actualizar datos existentes | `app.put('/users/:id', callback)`    |
| `DELETE` | Eliminar datos              | `app.delete('/users/:id', callback)` |

---

## ✅ **Ejemplo de Rutas**

```js
// Ruta GET
app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'Carlos' }]);
});

// Ruta POST
app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('User created');
});

// Ruta PUT
app.put('/users/:id', (req, res) => {
    res.send(`User ${req.params.id} updated`);
});

// Ruta DELETE
app.delete('/users/:id', (req, res) => {
    res.send(`User ${req.params.id} deleted`);
});
```

---

## ✅ **Middlewares**

Los middlewares son funciones que se ejecutan antes de enviar la respuesta.

Ejemplo:

```js
const cors = require('cors');
app.use(cors()); // Permite solicitudes desde otros orígenes

app.use(express.json()); // Permite recibir JSON en las peticiones
```

---

## ✅ **Gestión de Errores Básica**

```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

---

## ✅ **Uso de Variables de Entorno**

```js
require('dotenv').config();
const PORT = process.env.PORT || 3000;
```

---

## ✅ **Cosas Esenciales a Recordar**

✔ Siempre debes iniciar Express con `express()`.

✔ Usa `express.json()` para poder recibir datos JSON.

✔ Si frontend y backend están en puertos distintos, normalmente necesitas **CORS**.

✔ Express es flexible, pero debes controlar rutas y middlewares tú mismo.

✔ Para proyectos grandes, es recomendable separar rutas y controladores en archivos distintos.

---

## ✅ **Comando para Iniciar**

```bash
node index.js
```

O con **nodemon** para reinicio automático:

```bash
nodemon index.js
```

---

## ✅ **Conclusión**

Express es ideal para:

✔ Crear APIs REST.

✔ Servidores backend ligeros.

✔ Proyectos pequeños o grandes, escalables.

✔ Aprender el funcionamiento de Node.js en el desarrollo web.
