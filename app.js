require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()

const routes = require('./app/router/routes')

app.set('view engine', 'ejs')
app.set('views', './app/views')
app.use(express.static('./app'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: '12345678',
  resave: false,
  saveUninitialized: false
}))

app.get('/', (req, res) => {
  res.redirect('/login')
})

app.use('/', routes)

app.listen(process.env.PORT, () => {
  console.log(`Servidor na porta ${process.env.PORT}`)
  console.log(`Acesse: http://localhost:${process.env.PORT}`)
})