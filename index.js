const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

app.get('/hello',(request, response)=>{
  response.send('Hello there')
})

app.listen(port,()=>{
  console.log(`Server has been started Successfully. ${port}`)
})