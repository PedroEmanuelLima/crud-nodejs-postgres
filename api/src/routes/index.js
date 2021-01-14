/**
* Arquivo: src/routes/index.js
* Descrição: arwuivo responsável pela chamada da(s) API's da aplicação.
* Data: 14/01/2021
* Autor: Pedro Emanuel
*/

const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        succeess: 'true',
        message: 'Bem vindo',
        version: '1.0.0'
    })
});

module.exports = router;