const mongoose = require('mongoose')

const permissoesSchema = new mongoose.Schema({
    name: String,
})

module.exports = mongoose.model('Permissoes',permissoesSchema) 