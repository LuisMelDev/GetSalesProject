const BaseService = require('./base.service')

class BitacoraService extends BaseService{

    constructor(Bitacora){
        super(Bitacora)
        this.Bitacora = Bitacora
    }
    
}

module.exports = BitacoraService
