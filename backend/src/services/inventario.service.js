const BaseService = require('./base.service')

class InventarioService extends BaseService{

    constructor(Inventario){
        super(Inventario)
        this.Inventario = Inventario
    }
    
}

module.exports = InventarioService
