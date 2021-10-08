const express = require('express')
const data = require('./data.js')
const fs = require('fs')
const https = require('https')
const http = require('http')

const app = express()

const PORT = process.env.PORT || 80

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api', async (req, res) => {
  res.json(data)
})

app.get('/', (req, res) => {
  res.send("IT'S WORKING!!!!")
})

const httpsOptions = {
  key: fs.readFileSync('./security/cert.key'),
  cert: fs.readFileSync('./security/cert.pem')
}

//http.createServer(app).listen(80)

//https.createServer(httpsOptions, app).listen(8080)

async function start() {
  https.createServer(httpsOptions, app)
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}
start()