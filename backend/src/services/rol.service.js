const BaseService = require("./base.service");

class RolService extends BaseService {
    constructor(Rol) {
        super(Rol);
        this.Rol = Rol;
    }
}

module.exports = RolService;
