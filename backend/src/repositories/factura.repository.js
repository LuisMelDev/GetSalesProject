const BaseRepository = require("./base.repository");
let _factura = null;

class FacturaRepository extends BaseRepository {
    constructor({ Factura }) {
        super(Factura);
        _factura = Factura;
    }
}

module.exports = FacturaRepository;
