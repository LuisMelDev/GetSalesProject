const BaseRepository = require("./base.repository");
let _grupo = null;

class GrupoRepository extends BaseRepository {
    constructor({ Grupo }) {
        super(Grupo);
        _grupo = Grupo;
    }
    async getProductos(grupoId) {
        const grupo = await _grupo.findByPk(grupoId);
        return await grupo.getProductos();
    }
}

module.exports = GrupoRepository;
