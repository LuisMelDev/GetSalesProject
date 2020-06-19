const BaseRepository = require("./base.repository");
let _factura = null;
let _detalleFactura = null;

class FacturaRepository extends BaseRepository {
    constructor({ Factura, DetalleFactura }) {
        super(Factura);
        _factura = Factura;
        _detalleFactura = DetalleFactura;
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
