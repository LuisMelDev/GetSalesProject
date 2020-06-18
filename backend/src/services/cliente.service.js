const BaseService = require("./base.service");
let _clienteRepository = null;

class ClienteService extends BaseService {
    constructor({ ClienteRepository }) {
        super(ClienteRepository);
        _clienteRepository = ClienteRepository;
    }
}

module.exports = ClienteService;
