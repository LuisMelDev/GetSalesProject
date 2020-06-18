const BaseService = require("./base.service");
let _compraRepository = null;

class CompraService extends BaseService {
    constructor({ CompraRepository }) {
        super(CompraRepository);
        _compraRepository = CompraRepository;
    }
    async createDetalle(detalle) {
        const detalleCompra = await _compraRepository.createDetalle(detalle);
        return detalleCompra;
    }
}

module.exports = CompraService;
