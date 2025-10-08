const express = require('express')
const usuario = require('./usuarioRoutes')

module.exports = app => {
    app.use(express.json(), usuario)
}