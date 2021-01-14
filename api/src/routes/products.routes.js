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

// Listagem de todos os 'Products': (GET): localhost:3000/api/products
router.get('/products', productController.listAllProducts)

// Selecionar determinado 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.get('/products/:id', productController.findProductById);

// Atualizar 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.put('/products/:id', productController.updateProductById);

// Excluir 'Product' pelo 'Id': (GET): localhost:3000/api/products/:id
router.delete('/products/:id', productController.deleteProductById);


module.exports = router;