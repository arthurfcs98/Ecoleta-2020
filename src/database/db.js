const sqlite3 = require("sqlite3"). verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

db.serialize(() => {
    // //create a table
    // const table = `
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         address3 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `
    // db.run(table)

    // //insert data
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         address3
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
    //     "Colectoria",
    //     "Guilherme Gemballa, Jardim América",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]
    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)        

    // // Consult database

    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("REGISTROS ABAIXO:")
    //     console.log(rows)
    // })

    // // Remove from database

    // db.run(`DELETE FROM places WHERE id=?`, [1], function(err) {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("REGISTRO DELETADO COM ÊXITO")

    // })

})