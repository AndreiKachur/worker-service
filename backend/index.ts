const express = require('express')
const data = require('./data/data.ts')
const http = require('http')
const workdays = require('./routes/workdays')
const vacation = require('./routes/vacation')
// const fs = require('fs')
//const https = require('https')

const app = express()

const PORTHTTP = process.env.PORT || 5000
// const PORTHTTPS = process.env.PORT || 5001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/workdays', workdays)
app.use('/vacation', vacation)

app.get('/api', async (req: any, res: any) => {
  res.json(data)
})
app.get('/api/user', async (req: any, res: any) => {
  res.json(data.usersData)
})

app.get('/', (req: any, res: any) => {
  res.send("IT'S WORKING!!!!")
})

// const httpsOptions = {
//   key: fs.readFileSync('./security/cert.key'),
//   cert: fs.readFileSync('./security/cert.pem')
// }

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