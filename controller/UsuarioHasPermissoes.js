const UsuarioHasPermissoes = require('../model/UsuarioHasPermissoes')


module.exports = {

    async index(req, res){
        let userPermissoes = await UsuarioHasPermissoes.find()
        return res.json(userPermissoes)
    },
    async store(req, res){
        let {User, Permissoes, criado_em, atualizado_em, status} = req.body;
        userPermissoes = await UsuarioHasPermissoes.create({User, Permissoes, criado_em, atualizado_em, status})
        return res.json(userPermissoes)
    },
    async update(req, res){
        let {User, Permissoes, criado_em, atualizado_em, status} = req.body;
        userPermissoes = await UsuarioHasPermissoes.updateOne({User, Permissoes, criado_em, atualizado_em, status})
        return res.json(userPermissoes)
    },
    async delete(req, res){
        let {User, Permissoes, criado_em, atualizado_em, status} = await userPermissoes.findOne({'_id': req.query.id});
        userPermissoes = await UsuarioHasPermissoes.deleteOne({User, Permissoes, criado_em, atualizado_em, status})
        return res.json(userPermissoes)
    }
}