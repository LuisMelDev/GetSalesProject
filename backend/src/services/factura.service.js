const BaseService = require("./base.service");
let _facturaRepository = null;

class FacturaService extends BaseService {
    constructor({ FacturaRepository }) {
        super(FacturaRepository);
        _facturaRepository = FacturaRepository;
    }
    async createDetalles(detalles) {
        const detallesFactura = await _facturaRepository.createDetalles(
            detalle
        );
        return detallesFactura;
    }

    async getByFecha(fecha) {
        if (!fecha) {
            ErrorHelper(400, "fecha must be sent");
        }
        return await _facturaRepository.getByFecha();
    }
}

module.exports = FacturaService;
