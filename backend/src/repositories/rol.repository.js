const BaseRepository = require("./base.repository");
let _rol = null;

class RolRepository extends BaseRepository {
    constructor({ Rol }) {
        super(Rol);
        _rol = Rol;
    }

    async getUsuarios(rolId) {
        const rol = await _rol.findByPk(rolId);
        return await rol.getUsuarios();
    }
}

module.exports = RolRepository;
