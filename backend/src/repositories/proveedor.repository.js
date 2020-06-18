const BaseRepository = require("./base.repository");
let _proveedor = null;

class ProveedorRepository extends BaseRepository {
    constructor({ Proveedor }) {
        super(Proveedor);
        _proveedor = Proveedor;
    }

    async getProveedorNombre(nombre) {
        return await _proveedor.findAll({
            where: {
                nombre
            }
        })
    }

    async getCompras() {
        return await _proveedor.getCompras;
    }


}

module.exports = ProveedorRepository;
