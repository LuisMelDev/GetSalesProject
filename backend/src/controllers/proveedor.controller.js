let _proveedorService = null;

class ProveedorController {
    constructor({ ProveedorService }) {
        _proveedorService = ProveedorService;
    }
    async getAll(req, res) {
        const proveedores = await _proveedorService.getAll();
        return res.status(200).json(proveedores);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = ProveedorController;
