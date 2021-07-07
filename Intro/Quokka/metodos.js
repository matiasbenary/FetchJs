global.fetch = require('node-fetch');

/**
 *  Métodos de petición HTTP
 *  Son un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado
 **/

/**
 *  Métodos GET
 *  Se solicita un recurso especifico y se lo debe utilizar solo para recuperar datos.
 *  Ej: pedir lista de usuarios, lista de productos, un item en particular entre otras.
 **/
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log('GET', json));

/**
 *  Métodos Post
 *  Se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
 *  Ej: enviar informacion sensible como una usuario y clave. Para enviar formularios
 **/
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log('POST', json));

/**
 *  Métodos Post
 *  El metodo reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición
 *  Ej: actualizar usuarios, inventarios,etc.
 **/
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log('PUT', json));

/**
 *  Métodos Post
 *  El metodo es utilizado para aplicar modificaciones parciales a un recurso.
 *  Ej: actualizar usuarios, inventarios,etc.
 **/
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log('PATCH', json));

/**
 *  Métodos Delete
 *  El metodo es utilizado para borra un recurso en específico.
 *  Ej: eliminar usuario, eliminar item, etc.
 **/

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then((response) => response.json())
  .then((json) => console.log('DELETE', json));

/**
 *
 * Asincronico
 *
 **/

const getPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!response.ok) {
    throw new Error('Error', response.status);
  }
  const data = await response.json();
  return data;
};

console.log(await getPost());
