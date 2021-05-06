'use strict'

let express = require('express');
let api = express.Router();
let productController = require('../controllers/products.controller')

api.get('/allpro', productController.getProducts);
api.get('/pro:productId', productController.getProduct);
api.put('/uppro:productId', productController.updateProduct);
api.delete('/del:productId', productController.deleteProduct);
api.post('/addpro', productController.saveProduct);

module.exports = api;