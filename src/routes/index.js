const express = require('express')
const usuario = require('./usuarioRoutes')
const auth = require('./authRoutes')

module.exports = app => {
    app.use(express.json(),auth, usuario)
}