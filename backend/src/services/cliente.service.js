const BaseService = require("./base.service");
let _clienteRepository = null;

class ClienteService extends BaseService {
    constructor({ ClienteRepository }) {
        super(ClienteRepository);
        _clienteRepository = ClienteRepository;
    }
    async getFacturas(clienteId) {
        return await _clienteRepository.getFacturas(clienteId);
    }
}

module.exports = ClienteService;
