const carroServices = require('../services/carroServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result:[]};

        let carros = await carroServices.buscarTodos();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error: '', result:{}};

        let codigo = req.params.codigo;
        let carro = await carroServices.buscarUm(codigo);

        if(carro){
            json.result = carro;
        }
        res.json(json);
    },

    inserir: async (req, res) => {
        let json = {error:'', result: {}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;
        
        if(modelo && placa){
            let carroCodigo = await carroServices.inserir(modelo, placa);
            json.result = {
                codigo: carroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados.';
        }
        res.json(json);
        }
}