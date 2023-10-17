import * as Path from 'node:path'
// import * as URL from 'node:url'

import express from 'express'
import hbs from 'express-handlebars'

import puppyRouter from './routes.js'
import puppyData from './data/data.json' assert { type: 'json' }

const server = express()

// Server configuration
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

// Your routes/router(s) should go here

server.use('/puppies', puppyRouter)

server.get('/', (req, res) => {
  res.render('home', puppyData)
})

export default server
