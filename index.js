'use strict'

let app = require('./app');
let db = require('mongoose');
const uri = "mongodb+srv://maxyadmin:maximiliano@clustercrud.10f8r.mongodb.net/crud?retryWrites=true&w=majority";


db.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if(err) {
        console.log(`error al conectar a la bd: ${err}`)
    }
    console.log('conexion a la bd establecida')

    app.listen(3005, () => {
        try {
            console.log('api escuchando en puerto 3005')
        }
        catch(err) {
            console.log(err)
        }
    })
})

