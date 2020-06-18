const BaseService = require('./base.service')
const ErrorHelper = require("../helpers")
let _inventarioRepository = null;

class InventarioService extends BaseService{

    constructor(InventarioRepository){
        super(InventarioRepository)
        _inventarioRepository = InventarioRepository
    }
    async getByFecha(fecha_entrada){
        (!fecha_entrada)
        {
            ErrorHelper(400,"fecha must be sent")
        }
        return await _inventarioRepository.getByFecha();
}
    
}

module.exports = InventarioService
