const BaseRepository = require("./base.repository");
let _factura = null;
let _detalleFactura = null;

class FacturaRepository extends BaseRepository {
    constructor({ Factura, DetalleFactura }) {
        super(Factura);
        _factura = Factura;
        _detalleFactura = DetalleFactura;
    }
    async createDetalle(detalle) {
        const detalleFactura = await _detalleFactura.create(detalle);
        return detalleFactura;
    }
}

module.exports = FacturaRepository;
