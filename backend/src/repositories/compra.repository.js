const BaseRepository = require("./base.repository");
let _compra = null;
let _detalleCompra = null;

class CompraRepository extends BaseRepository {
    constructor({ Compra, DetalleCompra }) {
        super(Compra);
        _compra = Compra;
        _detalleCompra = DetalleCompra;
    }
    async createDetalles(detalles) {
        return await _detalleCompra.bulkCreate(detalles);
    }

    async getByFecha(fecha) {
        return await _compra.findAll({
            where: {
                fecha,
            },
        });
    }
}

module.exports = CompraRepository;
