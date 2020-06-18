const BaseService = require('./base.service')
const ErrorHelper= require('../helpers')

let _compraRepository = null;

class CompraService extends BaseService{

    constructor(CompraRepository){
        super(CompraRepository)
        _compraRepository = CompraRepository;
    }
    async getByFecha(fecha){
        (!fecha)
        {
            ErrorHelper(400,"fecha must be sent")
        }
        return await _compraRepository.getByFecha();
    }
}

module.exports = CompraService
