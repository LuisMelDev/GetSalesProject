let _compraService = null;

class CompraController {
    constructor({ CompraService }) {
        _compraService = CompraService;
    }
    async getAll(req, res) {
        const compras = await _compraService.getAll();
        return res.status(200).json(compras);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = CompraController;
