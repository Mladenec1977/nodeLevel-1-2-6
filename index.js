const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

let count = 0;

app.get('/hello', (req, res) => {
  fs.readFile('count.txt', 'utf8', (err, data) => {
    if (err) {
      throw err
    }
    count = data.split('=')[1]
    res.send(`<h1><a href="/">${count}</a></h1>`)
    fs.writeFileSync('count.txt', `count=${++count}`)
  })  
})
app.get('/', (req, res) => {  
  res.send(`<h1><a href="/hello">Hello</a></h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})