/**
* Arquivo: src/routes/products.routes.js
* Descrição: arwuivo responsável pelas rotas da api relacionando a classe 'Product.
* Data: 14/01/2021
* Autor: Pedro Emanuel
*/

const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// ==> Definindo as rotas do CRUD - 'Product'

// Criação de um 'Product': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct)

module.exports = router;