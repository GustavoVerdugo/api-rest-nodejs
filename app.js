'use strict'

let express = require('express');
let bodyparser = require('body-parser');
let app = express();
let api = require('./routes/index');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/crud', api);

module.exports = app;