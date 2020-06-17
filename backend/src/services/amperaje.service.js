const BaseService = require("./base.service");
let _amperajeRepository = null;

class AmperajeService extends BaseService {
    constructor({ AmperajeRepository }) {
        super(AmperajeRepository);
        _amperajeRepository = AmperajeRepository;
    }
}

module.exports = AmperajeService;
