const BaseService = require('./base.service')
let _grupoRepository =  null;

class GrupoService extends BaseService{

    constructor(GrupoRepository){
        super(GrupoRepository)
        _grupoRepository = GrupoRepository
    }

    async getProductosGrupo() {
        return await _grupoRepository.getProductosGrupo();
    }
    
}

module.exports = GrupoService