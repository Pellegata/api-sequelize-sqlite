const { Router } = require('express')
const AuthController = require('../controller/AuthController')

const routes = Router()

routes.post('/auth/login', AuthController.login)

module.exports = routes