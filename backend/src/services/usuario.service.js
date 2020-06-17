const BaseService = require("./base.service");
let _usuarioService = null;

class UsuarioService extends BaseService {
    constructor({ UsuarioRepository }) {
        super(UsuarioRepository);
        _usuarioService = UsuarioRepository;
    }
}

module.exports = UsuarioService;
