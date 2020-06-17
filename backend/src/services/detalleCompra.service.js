const BaseService = require('./base.service')

class DetalleCompraService extends BaseService{

    constructor(DetalleCompra){
        super(DetalleCompra)
        this.DetalleCompra = DetalleCompra
    }
    
}

module.exports = DetalleCompraService
