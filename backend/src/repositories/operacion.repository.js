const BaseRepository = require("./base.repository");
let _operacion = null;

class OperacionRepository extends BaseRepository {
    constructor({ Operacion }) {
        super(Operacion);
        _operacion = Operacion;
    }
    async getByOperacion(operacion) {
        return await _operacion.findOne({
            where: {
                operacion,
            },
        });
    }
}

module.exports = OperacionRepository;
