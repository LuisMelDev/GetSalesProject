const BaseService = require("./base.service");
let _inventarioRepository = null;

class InventarioService extends BaseService {
    constructor({ InventarioRepository }) {
        super(InventarioRepository);
        _inventarioRepository = InventarioRepository;
    }
}

module.exports = InventarioService;
