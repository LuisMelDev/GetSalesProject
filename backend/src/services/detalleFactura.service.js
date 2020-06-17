const BaseService = require('./base.service')

class DetalleFacturaService extends BaseService{

    constructor(DetalleFactura){
        super(DetalleFactura)
        this.DetalleFactura = DetalleFactura
    }
    
}

module.exports = DetalleFacturaService
