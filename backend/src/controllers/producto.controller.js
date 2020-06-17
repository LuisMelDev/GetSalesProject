let _productoService = null;

class ProductoController {
    constructor({ ProductoService }) {
        _productoService = ProductoService;
    }
    async getAll(req, res) {
        const productos = await _productoService.getAll();
        return res.status(200).json(productos);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = ProductoController;
