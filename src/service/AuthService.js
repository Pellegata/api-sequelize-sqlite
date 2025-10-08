const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const jsonSecrets = require('../config/jsonSecrets')


class AuthService {
    async login(dto) {
        const usuario = await database.Usuarios.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        })

        if (!usuario) {
            throw new Error('Usuario não encontrado')
        }

        const senhaIguais = await compare(dto.senha, usuario.senha)

        if(!senhaIguais) {
            throw new Error('Usuário ou senha invalidos')
        }

        const accessToken = sign({
            id: usuario.id,
            email: usuario.email
        }, jsonSecrets.secret, {
            expiresIn: 86400
        })

        return { accessToken }
    }
}

module.exports = AuthService