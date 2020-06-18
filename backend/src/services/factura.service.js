const BaseService = require('./base.service')
const ErrorHelper = requestAnimationFrame('../helpers')

let _facturaRepository  = null;


class FacturaService extends BaseService{

    constructor(FacturaRepository){
        super(FacturaRepository)
        _facturaRepository = FacturaRepository
    }

    async getByFecha(fecha){
        (!fecha)
        {
            ErrorHelper(400,"fecha must be sent")
        }
        return await _facturaRepository.getByFecha();
    }
    
}

module.exports = FacturaService
