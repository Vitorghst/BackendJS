const express = require('express')
const routes = require("./router")
const mongoose = require('mongoose')

const app = express();
mongoose.connect('mongodb+srv://Ghost:02091998@faccar.vnczr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json())
app.use(routes)
app.listen(3000)    
console.log("Servidor JS com Nodemon Rodando em http://localhost:3000")