const database = require('../models')
const {hash} = require('bcryptjs')
const uuid = require('uuid')

class UsuarioService {
    async cadastrar(dto) {
        const usuario = await database.Usuarios.findOne({
            where: {
                email: dto.email
            }
        })

        if(usuario) {
            throw new Error('Usuario ja cadastrado')
        }

        const senhaHash = await hash(dto.senha, 8)
        const novoUsuario = await database.Usuarios.create({
            id: uuid.v4(),
            nome: dto.nome,
            email: dto.email,
            senha: senhaHash
        })

        return novoUsuario
    }

}

module.exports = UsuarioService

