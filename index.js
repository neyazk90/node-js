const express = require('express')
const app = express()
const port = 5000

const appRoute = require('./src/routes');
app.use(appRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})