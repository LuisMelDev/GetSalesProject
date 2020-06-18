const BaseRepository = require("./base.repository");
let _producto = null;

class ProductoRepository extends BaseRepository {
    constructor({ Producto }) {
        super(Producto);
        _producto = Producto;
    }

    async getProductoNombre(nombre) {
        return await _producto.findAll({
            where: {
                nombre
            }
        })
    }
}

module.exports = ProductoRepository;
