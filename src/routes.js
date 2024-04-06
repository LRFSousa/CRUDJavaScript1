const express = require('express');
const router = express.Router();

const carroController = require('./controllers/carroControllers');

router.get('/carros', carroController.buscarTodos);
router.get('/carros/:codigo', carroController.buscarUm);
module.exports = router;
