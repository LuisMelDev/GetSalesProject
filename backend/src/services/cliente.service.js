const BaseService = require('./base.service')

class ClienteService extends BaseService{

    constructor(Cliente){
        super(Cliente)
        this.Cliente = Cliente
    }
    
}

module.exports = ClienteService
