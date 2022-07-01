const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.static('public'))

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
  return response.json(JSON.parse(fs.readFileSync(path.join(__dirname, 'todos.json'), 'utf8')))
})

app.get('/todo/:index', (request, response) => {
  // Lee el fichero todos.json y da como respuesta el objeto Todo en el index especificado por parámetros
  const index = request.params.index
  const file = fs.readFileSync(path.join(__dirname, 'todos.json'), 'utf8')
  const json = JSON.parse(file)
  return response.json(json[index])
})

app.post('/todo', (request, response) => {
  // Lee el body de la petición y escribe el nuevo Todo en el fichero todos.json
  const file = fs.readFileSync(path.join(__dirname, 'todos.json'), 'utf8')
  const json = JSON.parse(file)
  json.push(request.body)
  fs.writeFileSync(path.join(__dirname, 'todos.json'), JSON.stringify(json))
  return response.json({ message: "Created" })
})

app.delete('/todo/:index', (request, response) => {
  // Borra del fichero todos.json el objeto Todo en el index especificado por parámetros
  const index = request.params.index
  const file = fs.readFileSync(path.join(__dirname, 'todos.json'), 'utf8')
  let json = JSON.parse(file)
  json = json.slice(index, 1)
  fs.writeFileSync(path.join(__dirname, 'todos.json'), JSON.stringify(json))
  return response.json({ message: "Deleted" })
})

app.put('/todo/:index', (request, response) => {
  // Modifica del fichero todos.json el objeto Todo en el index especificado por parámetros
  const index = request.params.index
  const file = fs.readFileSync(path.join(__dirname, 'todos.json'), 'utf8')
  const json = JSON.parse(file)
  json[index] = request.body
  fs.writeFileSync(path.join(__dirname, 'todos.json'), JSON.stringify(json))
  return response.json({ message: "Updated" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})