const BaseService = require("./base.service");
const ErrorHelper = require("../helpers");
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
    async getUsuarioByUsername(username) {
        if (!username) {
            ErrorHelper(400, "username must be sent");
        }
        return await _usuarioRepository.getUserByUsername(username);
    }
    async getUsuarioByNombre(nombre) {
        if (!nombre) {
            ErrorHelper(400, "nombre must be sent");
        }
        return await _usuarioRepository.getUserByNombre(nombre);
    }
    async getByFacturas() {
        return await _usuarioRepository.getByFacturas();
    }
    async getByCompras() {
        return await _usuarioRepository.getByCompras();
    }
}

module.exports = UsuarioService;
