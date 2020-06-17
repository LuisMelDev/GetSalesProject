const BaseService = require("./base.service");

class OperacionService extends BaseService {
    constructor(Operacion) {
        super(Operacion);
        this.Operacion = Operacion;
    }
}

module.exports = OperacionService;
