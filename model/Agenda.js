const mongoose = require('mongoose')
const AgendaSchema = new mongoose.Schema({
    data: String,
    hora: String,

})

module.exports =  mongoose.model('agenda',AgendaSchema);