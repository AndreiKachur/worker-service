require('dotenv').config()
const express = require('express');
const data = require('./data/data.js');
const http = require('http');
const workdays = require('./routes/workdays');
const vacation = require('./routes/vacation');
const _ = require('lodash');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const sequelize = require('./db')
const models = require('./models/models')

// const fs = require('fs')
//const https = require('https')
// const PORTHTTPS = process.env.PORT || 5001

const PORTHTTP = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

const root = {
  getAllUsers: () => {
    return data.usersData
  },
  getUser: ({ id }) => {
    return data.usersData.find(user => user.id == id)
  },
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  qraphiql: true,
  rootValue: root
}))

app.use('/workdays', workdays)
app.use('/vacation', vacation)

app.get('/api', async (req, res) => {
  res.json(data)
})
app.get('/api/user/:id', async (req, res) => {
  const id = req.params.id;
  const userData = _.filter(data.usersData, ['id', id]);
  res.json(...userData)
})

// app.get('/', (req: any, res: any) => {
//   res.send("IT'S WORKING!!!!")
// })

// const httpsOptions = {
//   key: fs.readFileSync('./security/cert.key'),
//   cert: fs.readFileSync('./security/cert.pem')
// }

async function start() {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    http.createServer(app)
    app.listen(PORTHTTP, () => {
      console.log(`(HTTP) Server is running on port ${PORTHTTP}`)
    })
  } catch (e) {
    console.log(e);
  }
  // https.createServer(httpsOptions, app)
  // app.listen(PORTHTTPS, () => {
  //   console.log(`(HTTPS) Server is running on port ${PORTHTTPS}`)
  // })
}
start()