const BaseRepository = require("./base.repository");
let _inventario = null;

class InventarioRepository extends BaseRepository {
    constructor({ Inventario }) {
        super(Inventario);
        _inventario = Inventario;
    }

    async getByFecha(fecha_entrada){
        return await _inventario.findAll({
            where: {
                fecha_entrada
            }
        })
}
}
module.exports = InventarioRepository;
