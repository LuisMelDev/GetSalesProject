const BaseRepository = require("./base.repository");
let _proveedor = null;

class ProveedorRepository extends BaseRepository {
    constructor({ Proveedor }) {
        super(Proveedor);
        _proveedor = Proveedor;
    }
}

module.exports = ProveedorRepository;
