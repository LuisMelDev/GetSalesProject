const BaseService = require("./base.service");
let _productoRepository = null;

class ProductoService extends BaseService {
    constructor({ ProductoRepository }) {
        super(ProductoRepository);
        _productoRepository = ProductoRepository;
    }
}

module.exports = ProductoService;
