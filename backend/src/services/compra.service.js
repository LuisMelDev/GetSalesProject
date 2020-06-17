const BaseService = require('./base.service')

class CompraService extends BaseService{

    constructor(Compra){
        super(Compra)
        this.Compra = Compra
    }
    
}

module.exports = CompraService
