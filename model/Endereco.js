const mongoose = require('mongoose')
const EnderecoSchema = new mongoose.Schema({
    "cep": String,
    "state": String,
    "city": String,
    "neighborhood": String,
    "Street": String,
    "service": String,
    "location": Object,
})

module.exports = mongoose.model('endereco', EnderecoSchema);