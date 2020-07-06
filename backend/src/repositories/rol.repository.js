const BaseRepository = require("./base.repository");
let _rol = null;

class RolRepository extends BaseRepository {
    constructor({ Rol }) {
        super(Rol);
        _rol = Rol;
    }
    async getAll(limitResults, pageNum) {
        if (!limitResults || !pageNum) {
            return await _rol.findAll();
        }
        const page = parseInt(pageNum);
        const limit = parseInt(limitResults);
        const results = await _rol.findAll({
            limit,
            offset: (page - 1) * limit,
        });
        const count = await _rol.count();
        const paginationResults = this.getPaginate(limit, page, count);
        paginationResults.results = results;
        return paginationResults;
    }

    async getUsuarios(rolId) {
        const rol = await _rol.findByPk(rolId);
        return await rol.getUsuarios();
    }
}

module.exports = RolRepository;
