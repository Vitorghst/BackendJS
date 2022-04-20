const axios = require('axios')
module.exports = {
    async index(req, res){
        let cep = req.query.cep
        if(cep){
            axios.get('https://Brasilapi.com.br/api/cep/v2/'+cep)
                .then(function(response){
                    return res.json(response.data)     
                }).catch(error => res.json(error))
        }else{
                return res.status(404).json({error: 'CEP não pode ser vazio !'})
        }
    },
    async buscar(cep){
        if(cep){
            axios.get('https://Brasilapi.com.br/api/cep/v2/'+cep)
                .then(function(response){
                    return response.data
                }).catch(error => (error))
        }
    }
}