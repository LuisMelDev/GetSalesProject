const BaseRepository = require("./base.repository");
let _compra = null;

class CompraRepository extends BaseRepository {
    constructor({ Compra }) {
        super(Compra);
        _compra = Compra;
    }

    async getByFecha(fecha){
        return await _compra.findAll({
            where: {
                fecha
            }
        })
    }
}

module.exports = CompraRepository;
