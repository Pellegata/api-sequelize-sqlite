const UsuarioService = require('../service/UsuarioSevice')
const usuarioSevice = new UsuarioService

class UsuarioController {
    async pegarTodos(req, res) {
        try {
            const lista = await usuarioSevice.pegarTodos()
            res.status(200).send(lista)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
    async pegarUmPorId(req, res) {
        const id = req.params.id
        try {
            const usuario = await usuarioSevice.pegarUmPorId(id)
            res.status(200).send(usuario)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
    async cadastrar(req, res) {
        const {nome, email, senha} = req.body
        try {
            const usuario = await usuarioSevice.cadastrar({nome, email, senha})
            res.status(201).send(usuario)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
    async atualizar(req, res) {
        const { id } = req.params
        const {nome, email, senha} = req.body
        try {
            await usuarioSevice.atualizar(id, {nome, email, senha})
            res.status(200).send({message: 'Usuario atualizado com sucesso'})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}

module.exports = UsuarioController