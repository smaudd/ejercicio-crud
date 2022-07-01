const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.static('public'))

// CRUD = Create Read Update Delete
// GET -> lectura
// POST -> escritura
// PUT -> actualizar
// DELETE -> borrar

/**
 * Ejemplo objeto todo:
 * Todo {
 *   title: string,
 *   description: string,
 *   date: string
 * }
 */

app.get('/todo', (request, response) => {
  // Lee el fichero JSON y da como respuesta sus contenidos
})

app.get('/todo/:index', (request, response) => {
  // Lee el fichero todos.json y da como respuesta el objeto Todo en el index especificado por parámetros
})

app.post('/todo', (request, response) => {
  // Lee el body de la petición y escribe el nuevo Todo en el fichero todos.json
})

app.delete('/todo/:index', (request, response) => {
  // Borra del fichero todos.json el objeto Todo en el index especificado por parámetros
})

app.put('/todo/:index', (request, response) => {
  // Modifica del fichero todos.json el objeto Todo en el index especificado por parámetros
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})