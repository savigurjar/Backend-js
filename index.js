// console.log("backend js") 

//ENV
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

const express = require('express')
// import express from "express"

const app = express()
const port = 3000

const githubData = {
    "login": "savigurjar",
    "id": 96195601,
    "node_id": "U_kgDOBbvUEQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/96195601?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/savigurjar",
    "html_url": "https://github.com/savigurjar",
    "followers_url": "https://api.github.com/users/savigurjar/followers",
    "following_url": "https://api.github.com/users/savigurjar/following{/other_user}",
    "gists_url": "https://api.github.com/users/savigurjar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/savigurjar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/savigurjar/subscriptions",
    "organizations_url": "https://api.github.com/users/savigurjar/orgs",
    "repos_url": "https://api.github.com/users/savigurjar/repos",
    "events_url": "https://api.github.com/users/savigurjar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/savigurjar/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Savita",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "ASRL",
    "twitter_username": "savita_gurjar30",
    "public_repos": 19,
    "public_gists": 0,
    "followers": 0,
    "following": 4,
    "created_at": "2021-12-15T16:14:49Z",
    "updated_at": "2024-07-21T11:16:02Z"
  }

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

app.get('/github',(req,res)=>{
    res.json(githubData)
})