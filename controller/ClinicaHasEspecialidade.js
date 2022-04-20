const ClinicaHasEspecialidade = require('../model/ClinicaHasEspecialidade')


module.exports = {

    async index(req, res){
        let medicoClinica = await ClinicaHasEspecialidade.find()
        return res.json(medicoClinica)
    },
    async store(req, res){
        let {Medico, Clinica, Especialidade, criado_em, atualizado_em, status} = req.body;
        medicoClinica = await ClinicaHasEspecialidade.create({Medico, Clinica, Especialidade, criado_em, atualizado_em, status})
        return res.json(medicoClinica)
    }
}
