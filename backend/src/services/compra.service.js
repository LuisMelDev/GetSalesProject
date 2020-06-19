const BaseService = require("./base.service");
let _compraRepository = null;

class CompraService extends BaseService {
    constructor({ CompraRepository }) {
        super(CompraRepository);
        _compraRepository = CompraRepository;
    }
    async createDetalles(detalles) {
        const detallesCompra = await _compraRepository.createDetalles(detalles);
        return detallesCompra;
    }
    async getByFecha(fecha) {
        if (!fecha) {
            ErrorHelper(400, "fecha must be sent");
        }
        return await _compraRepository.getByFecha();
    }
}

module.exports = CompraService;
