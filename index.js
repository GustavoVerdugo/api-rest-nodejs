'use strict'

let app = require('./app');
let db = require('mongoose');
const uri = "mongodb+srv://<user>:<pass>@clustercrud.10f8r.mongodb.net/<db>?retryWrites=true&w=majority";


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

