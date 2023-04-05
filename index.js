const Server = require("./src/models/server");
const server = new Server();

server.start();

// Importar las dependencias necesarias
const express = require('express');
const app = express();

// Configurar el middleware para parsear JSON en las peticiones
app.use(express.json());

// Endpoint GET /
app.get('/', (req, res) => {
  // Obtener los query params
  const { limit = 10, page = 1, sort, query } = req.query;

  // Realizar la lógica de búsqueda y ordenamiento de productos
  // ...

  // Construir el objeto de respuesta
  const response = {
    status: 'success',
    payload: /* Resultado de los productos solicitados */,
    totalPages: /* Total de páginas */,
    prevPage: /* Página anterior */,
    nextPage: /* Página siguiente */,
    page: /* Página actual */,
    hasPrevPage: /* Indicador si la página previa existe */,
    hasNextPage: /* Indicador si la página siguiente existe */,
    prevLink: /* Link directo a la página previa (null si hasPrevPage=false) */,
    nextLink: /* Link directo a la página siguiente (null si hasNextPage=false) */,
  };

  // Enviar la respuesta al cliente
  res.json(response);
});

// Endpoint DELETE /api/carts/:cid/products/:pid
app.delete('/api/carts/:cid/products/:pid', (req, res) => {
  // Obtener los parámetros de la URL
  const { cid, pid } = req.params;

  // Realizar la lógica para eliminar el producto del carrito
  // ...

  // Enviar una respuesta de éxito
  res.json({ status: 'success' });
});

// Endpoint PUT /api/carts/:cid
app.put('/api/carts/:cid', (req, res) => {
  // Obtener los parámetros de la URL y el body de la petición
  const { cid } = req.params;
  const { productos } = req.body;

  // Realizar la lógica para actualizar el carrito con los productos recibidos
  // ...

  // Enviar una respuesta de éxito
  res.json({ status: 'success' });
});

// Endpoint PUT /api/carts/:cid/products/:pid
app.put('/api/carts/:cid/products/:pid', (req, res) => {
  // Obtener los parámetros de la URL y el body de la petición
  const { cid, pid } = req.params;
  const { cantidad } = req.body;

  // Realizar la lógica para actualizar la cantidad de ejemplares del producto en el carrito
  // ...

  // Enviar una respuesta de éxito
  res.json({ status: 'success' });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
