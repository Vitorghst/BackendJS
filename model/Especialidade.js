const mongoose = require('mongoose')
const EspecialidadeSchema = new mongoose.Schema({
    nome: String,
    criado_em: String,
    atualizado_em: String,
    status: String
})

module.exports =  mongoose.model('especialidade',EspecialidadeSchema);