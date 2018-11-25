const express = require('express')
const bp = require('body-parser')
const server = express()
const port = 3000

require('./server-assets/db/mlab-config')

// server.get('/test', (req, res, next) => {
//   res.status(200).send('Success')
// })

// Middleware
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

//Register Routes
let itemRoutes = require('./server-assets/routes/item-routes')
server.use('/api/items', itemRoutes)

// default handler
server.get('*', (req, res, next) => {
  res.status(404).send('<h1>404 Sorry No Page Found </h1>')
})

server.listen(port, () => {
  console.log('Server is running on port: ', port)
})