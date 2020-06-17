let _facturaService = null;

class FacturaController {
    constructor({ FacturaService }) {
        _facturaService = FacturaService;
    }
    async getAll(req, res) {
        const amperajes = await _facturaService.getAll();
        return res.status(200).json(amperajes);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = FacturaController;
