const database = require('../models')
const { hash } = require('bcryptjs')
const uuid = require('uuid')

class UsuarioService {
    async pegarTodos() {
        try {
            return await database.Usuarios.findAll()
        } catch (error) {
            throw new Error('Erro ao listar usuários')
        }
    }
    async pegarUmPorId(id) {
        try {
            return await database.Usuarios.findByPk(id)
        } catch(error) {
            throw new Error('Erro ao pegar usuário por id')
        }
    }
    async cadastrar(dto) {

        const usuario = await database.Usuarios.findOne({
            where: {
                email: dto.email
            }
        })

        if (usuario) {
            throw new Error('Usuario ja cadastrado')
        }

        try {
            const senhaHash = await hash(dto.senha, 8)
            const novoUsuario = await database.Usuarios.create({
                id: uuid.v4(),
                nome: dto.nome,
                email: dto.email,
                senha: senhaHash
            })

            return novoUsuario
        } catch (error) {
            throw new Error('Erro ao cadastrar usuário')
        }
    }
    async atualizar(id, dto) {
        try {
            const usuario = await database.Usuarios.findByPk(id)

            if(!usuario) {
                throw new Error('Usuário nao encontrado')
            }

            if(dto.senha) {
                dto.senha = await hash(dto.senha, 8)
            }

            await usuario.update(dto)

            return usuario

        } catch (error) {
            throw new Error('Erro ao atualizar usuário')
        }
    }
}

module.exports = UsuarioService

