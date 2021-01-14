/**
* Arquivo: server.js
* Descrição: arwuivo responsável por toda a configuração e execução da aplicação.
* Data: 14/01/2021
* Autor: Pedro Emanuel
*/

const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Aplicação executando na porta: " + port);
});