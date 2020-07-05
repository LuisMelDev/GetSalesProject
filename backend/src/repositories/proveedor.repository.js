const BaseRepository = require("./base.repository");
let _proveedor = null;

class ProveedorRepository extends BaseRepository {
    constructor({ Proveedor }) {
        super(Proveedor);
        _proveedor = Proveedor;
    }

    async getAll(limitResults, pageNum) {
        if (!limitResults || !pageNum) {
            return await _proveedor.findAll();
        }
        const page = parseInt(pageNum);
        const limit = parseInt(limitResults);
        const results = await _proveedor.findAll({
            limit,
            offset: (page - 1) * limit,
        });
        const count = await _proveedor.count();
        const paginationResults = this.getPaginate(limit, page, count);
        paginationResults.results = results;
        return paginationResults;
    }

    async getProveedorByNombre(nombre) {
        return await _proveedor.findAll({
            where: {
                nombre,
            },
        });
    }

    async getCompras(proveedorId) {
        const proveedor = await _proveedor.findByPk(proveedorId);
        return await proveedor.getCompras();
    }
}

module.exports = ProveedorRepository;
