const {Router} = require('express')
const UsuarioController = require('../controller/UsuarioController')
const usuarioController = new UsuarioController

const routes = Router()

routes.post('/usuarios', usuarioController.cadastrar)

module.exports = routes