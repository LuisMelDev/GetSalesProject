const BaseRepository = require("./base.repository");
let _usuario = null;

class UsuarioRepository extends BaseRepository {
    constructor({ Usuario }) {
        super(Usuario);
        _usuario = Usuario;
    }

    async getUsuarioByUsername(username) {
        return await _usuario.findAll({
            where: {
                username,
            },
        });
    }

    async getUsuarioByNombre(nombre) {
        return await _usuario.findAll({
            where: {
                nombre,
            },
        });
    }
    async getFacturas(userId) {
        const usuario = await _usuario.findByPk(userId);
        return await usuario.getFacturas();
    }

    async getCompras(userId) {
        const usuario = await _usuario.findByPk(userId);
        return await usuario.getCompras();
    }
}

module.exports = UsuarioRepository;
