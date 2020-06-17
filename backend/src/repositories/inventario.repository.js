const BaseRepository = require("./base.repository");
let _inventario = null;

class InventarioRepository extends BaseRepository {
    constructor({ Inventario }) {
        super(Inventario);
        _inventario = Inventario;
    }
}

module.exports = InventarioRepository;
