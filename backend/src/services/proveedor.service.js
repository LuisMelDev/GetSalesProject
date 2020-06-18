const BaseService = require("./base.service");
let _proveedorRepository = null;

class ProveedorService extends BaseService {
    constructor({ ProveedorRepository }) {
        super(ProveedorRepository);
        _proveedorRepository = ProveedorRepository;
    }
}

module.exports = ProveedorService;
