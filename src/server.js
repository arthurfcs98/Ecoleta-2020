const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())
//link database
const db = require("./database/db")

//config public folder
server.use(express.static('public'))

//ability req.body 
server.use(express.urlencoded({ extended: true}))

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

    //req.query: Querystrings of url
    //console.log(req.query)

    return res.render('create-point.html')
})

//savepoint
server.post('/savepoint', (req,res) => {
    //req.body: send form body 
    console.log(req.body)

        //insert data
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            address3,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.address3,
        req.body.state,
        req.body.city,
        req.body.items,
    ]

    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso")
        //console.log(this)
        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData) 
})

//search-results
server.get('/search', (req, res) => {

    const search = req.query.search
    if(search == ""){
        return res.render('search-results.html', {total: 0})
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%' OR address3 LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("SEM ERRO PARA CONSULTAR REGISTROS")

        const total = rows.length

        return res.render('search-results.html', { places: rows, total})

    })
    
})

// turn on server
server.listen(3000)