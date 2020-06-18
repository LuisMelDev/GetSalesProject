const BaseRepository = require("./base.repository");
let _proveedor = null;

class ProveedorRepository extends BaseRepository {
    constructor({ Proveedor }) {
        super(Proveedor);
        _proveedor = Proveedor;
    }

    async getProveedorByNombre(nombre) {
        return await _proveedor.findAll({
            where: {
                nombre,
            },
        });
    }

    async getCompras(proveedorId) {
        const proveedor = await _proveedor.findByPk(proveedorId);
        return await proveedor.getCompras();
    }
}

module.exports = ProveedorRepository;
