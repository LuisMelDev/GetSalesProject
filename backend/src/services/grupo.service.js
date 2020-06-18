const BaseService = require("./base.service");
let _grupoRepository = null;

class GrupoService extends BaseService {
    constructor({ GrupoRepository }) {
        super(GrupoRepository);
        _grupoRepository = GrupoRepository;
    }
}

module.exports = GrupoService;
