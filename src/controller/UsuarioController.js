const UsuarioService = require('../service/UsuarioSevice')
const usuarioSevice = new UsuarioService

class UsuarioController {
    async cadastrar(req, res) {
        const {nome, email, senha} = req.body
        try {
            const usuario = await usuarioSevice.cadastrar({nome, email, senha})
            res.status(201).send(usuario)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}

module.exports = UsuarioController