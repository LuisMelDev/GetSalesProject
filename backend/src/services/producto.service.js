const BaseService = require('./base.service')

class ProductoService extends BaseService{

    constructor(Producto){
        super(Producto)
        this.Producto = Producto
    }
    
}

module.exports = ProductoService
