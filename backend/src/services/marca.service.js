const BaseService = require("./base.service");
let _marcaRepository = null;

class MarcaService extends BaseService {
    constructor({ MarcaRepository }) {
        super(MarcaRepository);
        _marcaRepository = MarcaRepository;
    }
}

module.exports = MarcaService;
