const BaseService = require('./base.service')

let _marcaRepository = null;

class MarcaService extends BaseService{

    constructor(MarcaRepository){
        super(MarcaRepository)
        _marcaRepository = MarcaRepository
    }

    async getProductosMarca() {
        return await _marcaRepository.getProductosMarca();
    }
}

module.exports = MarcaService