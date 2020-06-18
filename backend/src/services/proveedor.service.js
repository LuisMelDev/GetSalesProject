const BaseService = require("./base.service");
let _proveedorRepository = null;

class ProveedorService extends BaseService {
    constructor({ ProveedorRepository }) {
        super(ProveedorRepository);
        _proveedorRepository = ProveedorRepository;
    }
    async getProveedorNombre(nombre) {
        if (!nombre) {
            ErrorHelper(400, "nombre must be sent");
        }
        return await _proveedorRepository.getProveedorNombre();
    }

    async getCompras() {
        return await _proveedorRepository.getCompras();
    }
}

module.exports = ProveedorService;
