const BaseService = require("./base.service");
let _rolRepository = null;

class RolService extends BaseService {
    constructor({ RolRepository }) {
        super(RolRepository);
        _rolRepository = RolRepository;
    }

    async getUsuario() {
        return await _rolRepository.getUsuario();
    }
}

module.exports = RolService;
