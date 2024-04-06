require('dotenv').config({path:'variaveis.env'});
const express = require('express')
const cors = require('cors');
const bodyparser = require('body-parser');//converte o 

const routers = require('./routes');//informa onde estão as rotas do projeto
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.listen(process.env.PORT, () =>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
})
//configuração
