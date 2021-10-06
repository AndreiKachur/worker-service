const express = require('express')
const data = require('./data.js')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api', async (req, res) => {
    res.json(data)
})

async function start() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}
start()