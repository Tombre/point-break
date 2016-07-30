const express = require('express')
const path = require('path')

const app = express()

app.listen(4000)

app.use(express.static(path.join(__dirname, '../build'), {extensions: ['html']}))

app.use('/*', (req, res) => {
  res
    .sendFile(path.join(__dirname, '../build/index.html'))
})
