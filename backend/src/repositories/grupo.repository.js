const BaseRepository = require("./base.repository");
let _grupo = null;

class GrupoRepository extends BaseRepository {
    constructor({ Grupo }) {
        super(Grupo);
        _grupo = Grupo;
    }
    async getAll(limitResults, pageNum) {
        if (!limitResults || !pageNum) {
            return await _grupo.findAll();
        }
        const page = parseInt(pageNum);
        const limit = parseInt(limitResults);
        const results = await _grupo.findAll({
            limit,
            offset: (page - 1) * limit,
        });
        const count = await _grupo.count();
        const paginationResults = this.getPaginate(limit, page, count);
        paginationResults.results = results;
        return paginationResults;
    }
    async getProductos(grupoId) {
        const grupo = await _grupo.findByPk(grupoId);
        return await grupo.getProductos();
    }
}

module.exports = GrupoRepository;
