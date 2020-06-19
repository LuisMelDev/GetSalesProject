const BaseService = require("./base.service");
let _facturaRepository = null;

class FacturaService extends BaseService {
    constructor({ FacturaRepository }) {
        super(FacturaRepository);
        _facturaRepository = FacturaRepository;
    }
    async createDetalles(detalles) {
        return await _facturaRepository.createDetalles(detalles);
    }

    async getByFecha(fecha) {
        if (!fecha) {
            ErrorHelper(400, "fecha must be sent");
        }
        return await _facturaRepository.getByFecha();
    }
}

module.exports = FacturaService;
