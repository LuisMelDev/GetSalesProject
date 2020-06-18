const BaseRepository = require("./base.repository");
let _usuario = null;

class UsuarioRepository extends BaseRepository {
    constructor({ Usuario }) {
        super(Usuario);
        _usuario = Usuario;
    }
    async getByUsername(username) {
        const usuario = await _usuario.findOne({
            where: {
                username,
            },
        });
        return usuario;
    }
}

module.exports = UsuarioRepository;
