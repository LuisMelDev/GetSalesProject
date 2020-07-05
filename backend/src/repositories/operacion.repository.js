const BaseRepository = require("./base.repository");
let _operacion = null;

class OperacionRepository extends BaseRepository {
    constructor({ Operacion }) {
        super(Operacion);
        _operacion = Operacion;
    }
    async getAll(limitResults, pageNum) {
        if (!limitResults || !pageNum) {
            return await _operacion.findAll();
        }
        const page = parseInt(pageNum);
        const limit = parseInt(limitResults);
        const results = await _operacion.findAll({
            limit,
            offset: (page - 1) * limit,
        });
        const count = await _operacion.count();
        const paginationResults = this.getPaginate(limit, page, count);
        paginationResults.results = results;
        return paginationResults;
    }
    async getByOperacion(operacion) {
        return await _operacion.findOne({
            where: {
                operacion,
            },
        });
    }
}

module.exports = OperacionRepository;
