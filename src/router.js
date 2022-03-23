const routes = require('express').Router();

const UserController = require('../controller/User')

routes.post('/user', UserController.store)
routes.get('/user', UserController.Index)
routes.put('/user', UserController.update)
routes.delete('/user', UserController.delete)
module.exports = routes