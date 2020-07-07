const BaseRepository = require("./base.repository");
let _factura = null;
let _detalleFactura = null;

class FacturaRepository extends BaseRepository {
    constructor({ Factura, DetalleFactura }) {
        super(Factura);
        _factura = Factura;
        _detalleFactura = DetalleFactura;
    }
    async getAll(limitResults, pageNum, sortBy = "id", orderBy = "desc") {
        // Check if sort key is an actual attribute of model
        if (!this.validSort(_factura, sortBy)) {
            return [];
        }
        if (!limitResults || !pageNum) {
            return await _factura.findAll({
                order: [[sortBy, orderBy]],
            });
        }
        const page = parseInt(pageNum);
        const limit = parseInt(limitResults);
        const results = await _factura.findAll({
            limit,
            offset: (page - 1) * limit,
            order: [[sortBy, orderBy]],
        });
        const count = await _factura.count();
        const paginationResults = this.getPaginate(limit, page, count);
        paginationResults.results = results;
        return paginationResults;
    }

    async createDetalles(detalles) {
        return await _detalleFactura.bulkCreate(detalles);
    }

    async getByFecha(fecha) {
        return await _factura.findAll({
            where: {
                fecha,
            },
        });
    }
}

module.exports = FacturaRepository;
