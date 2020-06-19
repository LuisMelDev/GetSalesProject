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
        const detallesCompra = await _detalleCompra.bulkCreate(detalles);
        return detallesCompra;
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
