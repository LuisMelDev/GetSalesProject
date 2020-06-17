const BaseRepository = require("./base.repository");
let _producto = null;

class ProductoRepository extends BaseRepository {
    constructor({ Producto }) {
        super(Producto);
        _producto = Producto;
    }
}

module.exports = ProductoRepository;
