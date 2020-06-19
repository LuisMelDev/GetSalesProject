const BaseRepository = require("./base.repository");
let _usuario = null;
let _rol = null

class UsuarioRepository extends BaseRepository {
    constructor({ Usuario, Rol }) {
        super(Usuario);
        _usuario = Usuario;
        _rol= Rol;
    }

    async getUsuarioByUsername(username) {
        return await _usuario.findOne({
            where: {
                username,
            },
            include:[
                {model: _rol, as:'rol'}
            ]
        });
    }

    async getUsuarioByNombre(nombre) {
        return await _usuario.findOne({
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
