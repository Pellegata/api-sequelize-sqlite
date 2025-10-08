const { verify, decode } = require('jsonwebtoken')
const jsonSecrets = require('../config/jsonSecrets')

module.exports = async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(400).send('Acess token não informado')
    }

    const [, accessToken] = token.split(" ")

    try {
        verify(accessToken, jsonSecrets.secret)

        const {id, email} = await decode(accessToken)

        req.usuarioId = id
        req.usuarioEmail = email

        return next()

    } catch (error) {
        res.status(401).send('Usuario não autorizado')
    }

}