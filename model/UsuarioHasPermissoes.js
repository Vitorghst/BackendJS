const mongoose = require('mongoose')
const UsuarioHasEspecialidadeSchema = new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Permissoes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permissoes"
    },
    criado_em: Number,
    atualizado_em: Number,
    status: Boolean,
});

module.exports = mongoose.model('BuscaUsers', UsuarioHasEspecialidadeSchema)