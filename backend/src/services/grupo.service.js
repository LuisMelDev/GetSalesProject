const BaseService = require('./base.service')

class GrupoService extends BaseService{

    constructor(Grupo){
        super(Grupo)
        this.Grupo = Grupo
    }
    
}

module.exports = GrupoService