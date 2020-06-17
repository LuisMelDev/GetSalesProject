const BaseRepository = require("./base.repository");
let _compra = null;

class CompraRepository extends BaseRepository {
    constructor({ Compra }) {
        super(Compra);
        _compra = Compra;
    }
}

module.exports = CompraRepository;
