const BaseService = require('./base.service')
let _clienteRepository = null;
class ClienteService extends BaseService{

    constructor(ClienteRepository){
        super(ClienteRepository)
        _clienteRepository = ClienteRepository
    }
    async getByFacturas(){
        return await _clienteRepository.getByFacturas();
    }
    
}

module.exports = ClienteService
