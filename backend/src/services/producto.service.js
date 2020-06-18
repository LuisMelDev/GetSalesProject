const BaseService = require("./base.service");
let _productoRepository = null;

class ProductoService extends BaseService {
    constructor({ ProductoRepository }) {
        super(ProductoRepository);
        _productoRepository = ProductoRepository;
    }
    async getProductoNombre(nombre) {
        if (!nombre) {
            ErrorHelper(400, "nombre must be sent");
        }
        return await _productoRepository.getProductoNombre();
    }
}

module.exports = ProductoService;
