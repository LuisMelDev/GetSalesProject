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

    async getByFecha(fecha){
        return await _factura.findAll({
            where: {
                fecha
            }
        })
    }

}

module.exports = FacturaRepository;
