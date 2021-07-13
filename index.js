const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/views/index.html'))
})

app.use('/', (req, res) => {
  res.send('<h1>404 | Not Found</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})