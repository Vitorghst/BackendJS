const User = require('../model/User')

//CRUD

module.exports = {
   async store(req, res){
        const {nome, email, token, RA, password}= req.body
        const user = await User.create({nome, email, token, RA, password})
        return res.json(user)
    },
    async Index (req, res){
        const user = await User.find()
        return res.json(user)
    },
    async update (req, res){
        const {nome, email, RA, password}= req.body
        let id = req.query.id
        console.log(id);
        let user = await User.findById(id)
        user = await User.updateOne({'_id': id}, {nome, email, RA, password})
        console.log(user)
        return res.status(202).json({
            message: "Atualização realizada com sucesso",
            data: user
        })
    },
    async delete (req, res){
        let id = req.query.id;
        let user = await User.findById(id);
        user = await User.deleteOne(user);
        return res.status(202).json(user);
    }
}