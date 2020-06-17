const BaseRepository = require("./base.repository");
let _usuario = null;

class UsuarioRepository extends BaseRepository {
    constructor({ Usuario }) {
        super(Usuario);
        _usuario = Usuario;
    }
}

module.exports = UsuarioRepository;
