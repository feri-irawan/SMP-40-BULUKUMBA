const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(expressLayouts);


app.get('/', (req, res) => {
  res.render('./app/index')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})