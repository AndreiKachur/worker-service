const express = require('express')
const data = require('./data.js')
const fs = require('fs')
const http = require('http')
//const https = require('https')

const app = express()

const PORTHTTP = process.env.PORT || 5000
//const PORTHTTPS = process.env.PORT || 5001

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

async function start() {
  http.createServer(app)
  app.listen(PORTHTTP, () => {
    console.log(`(HTTP) Server is running on port ${PORTHTTP}`)
  })
  // https.createServer(httpsOptions, app)
  // app.listen(PORTHTTPS, () => {
  //   console.log(`(HTTPS) Server is running on port ${PORTHTTPS}`)
  // })
}
start()