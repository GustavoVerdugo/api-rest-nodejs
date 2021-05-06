'use strict'

const Products = require('../models/products.model');

const getProducts = (req, res) => {
    Products.find({}, (err, producto) => {
        if (err) {return res.status(500).send({ message: 'Error al obtener los productos' })}
        if (!producto) {return res.status(404).send({ message: 'No existen productos' })}
        res.status(200).send({ product: producto })
    })
}

const getProduct = (req, res) => {
    let productId = req.params.productId
    Products.findById(productId, (err, producto) => {
        if (err) {
            return res.status(500).send({ message: 'Error al obtener los productos' })
        }
        else {
            res.status(200).send({ products: producto })
        }
        if (!producto) {
            return res.status(404).send({ message: 'No existen productos' })
        }
        else {
            res.status(200).send({ products: producto })
        }
    })
}

const updateProduct = (req, res) => {
    let productId = req.params.productId
    let update = req.body

    Products.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({ message: `Error al actualizar el producto ${err}` })

        res.status(200).send({ message: `Producto Actualizado ${productUpdated}` })
    })
}

const deleteProduct = (req, res) => {
    let productId = req.params.productId;
    Products.findById(productId, (err, product) => {
        if (err) res.status(500).send({ message: `Error al borrar el producto ${err}` })

        product.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar el producto ${err}` })
            res.status(200).send({ message: `Producto Borrado` })
        })
    })
}

const saveProduct = (req, res) => {
    let producto = new Products()
    producto.name = req.body.name
    producto.description = req.body.description
    producto.price = req.body.price
    producto.category = req.body.category
    producto.save((err, productStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar' })
        }
        else {
            res.status(200).send({ productStored })
        }
    })
}

module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    saveProduct
}