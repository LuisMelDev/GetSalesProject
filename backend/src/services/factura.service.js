const BaseService = require("./base.service");
let _facturaRepository = null;

class FacturaService extends BaseService {
    constructor({ FacturaRepository }) {
        super(FacturaRepository);
        _facturaRepository = FacturaRepository;
    }
    async createDetalle(detalle) {
        const detalleFactura = await _facturaRepository.createDetalle(detalle);
        return detalleFactura;
    }

    async getByFecha(fecha) {
        !fecha;
        {
            ErrorHelper(400, "fecha must be sent");
        }
        return await _facturaRepository.getByFecha();
    }
}

module.exports = FacturaService;
