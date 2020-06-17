let _inventarioService = null;

class InventarioController {
    constructor({ InventarioService }) {
        _inventarioService = InventarioService;
    }
    async getAll(req, res) {
        const inventarios = await _inventarioService.getAll();
        return res.status(200).json(inventarios);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = InventarioController;
