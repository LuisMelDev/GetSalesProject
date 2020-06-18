const BaseService = require("./base.service");
let _rolRepository = null;

class RolService extends BaseService {
    constructor({ RolRepository }) {
        super(RolRepository);
        _rolRepository = RolRepository;
    }
}

module.exports = RolService;
