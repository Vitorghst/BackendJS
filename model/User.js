const mongoose = require('mongoose')

const UserSchemna = new mongoose.Schema({
    nome: String,
    email: String,
    token: String,
    RA: Number,
    password: String,
})

module.exports = mongoose.model('User', UserSchemna)