const BaseService = require('./base.service')

class ProveedorService extends BaseService{

    constructor(Proveedor){
        super(Proveedor)
        this.Proveedor = Proveedor
    }
    
}

module.exports = ProveedorService
