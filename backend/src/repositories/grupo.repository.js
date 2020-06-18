const BaseRepository = require("./base.repository");
let _grupo = null;

class GrupoRepository extends BaseRepository {
    constructor({ Grupo }) {
        super(Grupo);
        _grupo = Grupo;
    }
    async getProductosGrupo() {
        return await _grupo.getProductos();
    }
}

module.exports = GrupoRepository;
