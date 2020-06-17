let _operacionService = null;

class OperacionController {
    constructor({ OperacionService }) {
        _operacionService = OperacionService;
    }
    async getAll(req, res) {
        const operaciones = await _operacionService.getAll();
        return res.status(200).json(operaciones);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = OperacionController;
