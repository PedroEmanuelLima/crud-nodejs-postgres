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

//==> Metodo responsável por selecionar todos os 'Products'
exports.listAllProducts = async(req, res) => {
    const response = await db.query('SELECT * FROM products ORDER BY product_name ASC');
    res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Product' pelo 'Id'
exports.findProductById = async(req, res) => {
    const productId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM products WHERE productId = $1', [productId]);
    res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar 'Product' pelo 'Id'
exports.updateProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    const { product_name, quantity, price } = req.body;

    const response = await db.query(
        "UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE productId = $4",
        [product_name, quantity, price, productId]
    );

    res.status(200).send({ message: "Product Updated Successfully!" });
};

// ==> Método responsável por deletar 'Product' pelo 'Id'
exports.deleteProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    await db.query('DELETE FROM products WHERE productId = $1', [productId]);

    res.status(200).send({ message: 'Product deleted successfully!', productId });
};