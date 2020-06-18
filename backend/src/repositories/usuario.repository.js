const BaseRepository = require("./base.repository");
let _usuario = null;

class UsuarioRepository extends BaseRepository {
    constructor({ Usuario }) {
        super(Usuario);
        _usuario = Usuario;
    }

    async getUsuarioUsername(username) {
        return await _usuario.findAll({
            where: {
                username
            }
        })
    }

    async getUsuarioNombre(nombre) {
        return await _usuario.findAll({
            where: {
                nombre
            }
        })
    }

    async getByFacturas(){
        return await _usuario.getFacturas();
    }

    async getByCompras(){
        return await _usuario.getCompras();
    }
}

module.exports = UsuarioRepository;
