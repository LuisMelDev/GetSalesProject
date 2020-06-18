const BaseService = require("./base.service");
let _usuarioRepository = null;

class UsuarioService extends BaseService {
    constructor({ UsuarioRepository }) {
        super(UsuarioRepository);
        _usuarioRepository = UsuarioRepository;
    }
    async getByUsername(username) {
        const usuario = await _usuarioRepository.getByUsername(username);
        return usuario;
    }
}

module.exports = UsuarioService;
