const BaseRepository = require("./base.repository");
let _operacion = null;

class OperacionRepository extends BaseRepository {
    constructor({ Operacion }) {
        super(Operacion);
        _operacion = Operacion;
    }
}

module.exports = OperacionRepository;
