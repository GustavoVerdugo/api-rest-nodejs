'use strict'

let db = require('mongoose');
let Schema = db.Schema;

const Products = new Schema({
    name: { type: String },
    description: { type: String},
    price: { type: Number},
    category: { type: String, enum: ['Electronic', 'Sports', 'Home']}
})

module.exports = db.model('Products', Products);