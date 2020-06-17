let _rolService = null;

class RolController {
    constructor({ RolService }) {
        _rolService = RolService;
    }
    async getAll(req, res) {
        const roles = await _rolService.getAll();
        return res.status(200).json(roles);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = RolController;
