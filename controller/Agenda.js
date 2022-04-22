const Agenda = require('../model/Agenda')


module.exports = {
    async index(req, res){
        let agendas = await Agenda.find()
        return res.json(agendas)
    },
    async store(req, res){
        let agenda = req.body
        agenda = await Agenda.create(agenda)
        return res.json(agenda)
    },  
    async update(req, res){
        let agenda = req.body
        agenda.atualizado_em = Date.now()
        agenda = await Agenda.updateOne({'_id': req.query.id}, agenda)
        return res.json(agenda)
    },
    async delete(req, res){
        let agenda = await Agenda.findOne({'_id': req.query.id})
        agenda = await Agenda.deleteOne({'_id': req.query.id}, agenda)
        return res.json(agenda)
    }

}