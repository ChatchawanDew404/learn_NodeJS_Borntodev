const express = require('express')
const app =express()
const port = 3000;
const debug = require('debug')
const morgan = require('morgan')

app.get('/',(req,res)=>{
res.send('Hello world ')
})

app.use(morgan('combined'))


app.listen(port,()=>{
    console.log('Listen on port %d',port)
})