let _inventarioService = null;

class InventarioController {
    constructor({ InventarioService }) {
        _inventarioService = InventarioService;
    }
    async get(req, res, next) {
        const { producto_id } = req.params;
        try {
            const inventario = await _inventarioService.get(producto_id);
            return res.send(inventario);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async getAll(req, res, next) {
        const { pageSize, pageNum } = req;
        try {
            const inventarios = await _inventarioService.getAll(
                pageSize,
                pageNum
            );
            return res.send(inventarios);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async getByFecha(req, res, next) {
        const { fecha_entrada } = req.params;
        try {
            const fechaEntrada = await _inventarioService.getByFecha(
                fecha_entrada
            );
            return res.send(fechaEntrada);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
}

module.exports = InventarioController;
