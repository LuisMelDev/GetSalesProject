const BaseService = require('./base.service')

class MarcaService extends BaseService{

    constructor(Marca){
        super(Marca)
        this.Marca = Marca
    }
    
}

module.exports = MarcaService