const BaseService = require('./base.service')

class FacturaService extends BaseService{

    constructor(Factura){
        super(Factura)
        this.Factura = Factura
    }
    
}

module.exports = FacturaService
