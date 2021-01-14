/**
* Arquivo: src/config/database.js
* Descrição: arwuivo responsável pelas 'ConnectionString' da aplicação: PostgresSQL'.
* Data: 14/01/2021
* Autor: Pedro Emanuel
*/

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados (PostgresSQL)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Base de Dados conectada com sucesso!');
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};