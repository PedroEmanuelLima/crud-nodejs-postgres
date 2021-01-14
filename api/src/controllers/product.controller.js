/**
* Arquivo: src/controller/products.controller.js
* Descrição: arwuivo responsável pela lógica do CRUD da API 'Product'.
* Data: 14/01/2021
* Autor: Pedro Emanuel
*/

const db = require('../config/database');

// ==> Método rsponsavel por criar um novo 'Product'
exports.createProduct = async(req, res) => {
    const { product_name, quantity, price } = req.body;
    const responde = await db.query(
        'INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)',
        [product_name, quantity, price]
    );

    res.status(201).send({
        message: 'Product added succesfully!',
        body: {
            product: { product_name, quantity, price }
        },
    });
};