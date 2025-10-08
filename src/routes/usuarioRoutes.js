const {Router} = require('express')
const UsuarioController = require('../controller/UsuarioController')
const usuarioController = new UsuarioController
const autenticado = require('../meddleware/autenticado')

const routes = Router()
routes.use(autenticado)

routes.get('/usuarios', usuarioController.pegarTodos)
routes.get('/usuarios/:id', usuarioController.pegarUmPorId)
routes.post('/usuarios', usuarioController.cadastrar)
routes.put('/usuarios/:id', usuarioController.atualizar)

module.exports = routes