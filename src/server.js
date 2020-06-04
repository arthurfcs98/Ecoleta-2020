const express = require('express')
const server = express()

//config public folder
server.use(express.static('public'))

//Using template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Config routes
//home
server.get('/', (req, res) => {
    return res.render('index.html')
})

//create-point
server.get('/create-point', (req, res) => {
    return res.render('create-point.html')
})

//search-results
server.get('/search', (req, res) => {
    return res.render('search-results.html')
})

// turn on server
server.listen(3000)