let _usuarioService = null;

class UsuarioController {
    constructor({ UsuarioService }) {
        _usuarioService = UsuarioService;
    }
    async getAll(req, res) {
        const usuarios = await _usuarioService.getAll();
        return res.status(200).json(usuarios);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = UsuarioController;
