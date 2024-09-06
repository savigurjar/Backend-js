// console.log("backend js") 

//ENV
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

const express = require('express')
// import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Bighit Music')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
// app.listen(process.env.PORT, () => {
//     console.log('example app listening on port ${port}')
// })

app.get('/login',(req,res)=>{
res.send('<h1>please login at false nine creatives</h1>')
})
app.get('/tata',(req,res)=>{
    res.send("<b>he is in B21 world</b>")
})