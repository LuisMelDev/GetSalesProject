const BaseRepository = require("./base.repository");
let _rol = null;

class RolRepository extends BaseRepository {
    constructor({ Rol }) {
        super(Rol);
        _rol = Rol;
    }

    async getUsuario() {
        return await _rol.getUsuarios;
    }
}

module.exports = RolRepository;
