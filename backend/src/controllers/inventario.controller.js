let _inventarioService = null;

class InventarioController {
    constructor({ InventarioService }) {
        _inventarioService = InventarioService;
    }
    async get(req, res) {
        const { producto_id } = req.params;
        const inventario = await _inventarioService.get(producto_id);
        return res.send(inventario);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req;
        const inventarios = await _inventarioService.getAll(pageSize, pageNum);
        return res.send(inventarios);
    }
}

module.exports = InventarioController;
