/* Express */
const express = require('express')
const server = express()
server.use(express.json())

/* Environment variables */
require('dotenv').config()
const { port } = require('./config/config')

/* Routes */
server.use('/api', require('./api/routes'))

/* Middleware */
const { handleErr } = require('./api/middleware')
server.use(handleErr)

server.listen(port, () => console.log(`👋 Hey from port ${port}!`))
