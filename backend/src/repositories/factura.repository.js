const BaseRepository = require("./base.repository");
let _factura = null;

class FacturaRepository extends BaseRepository {
    constructor({ Factura }) {
        super(Factura);
        _factura = Factura;
    }

    async getByFecha(fecha){
        return await _factura.findAll({
            where: {
                fecha
            }
        })
    }

}

module.exports = FacturaRepository;
