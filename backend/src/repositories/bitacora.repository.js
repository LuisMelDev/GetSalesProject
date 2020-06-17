const BaseRepository = require("./base.repository");
let _bitacora = null;

class BitacoraRepository extends BaseRepository {
    constructor({ Bitacora }) {
        super(Bitacora);
        _bitacora = Bitacora;
    }
}

module.exports = BitacoraRepository;
