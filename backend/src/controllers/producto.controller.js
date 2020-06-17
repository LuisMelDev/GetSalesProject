let _productoService = null;

class ProductoController {
    constructor({ ProductoService }) {
        _productoService = ProductoService;
    }
    async get(req, res) {
        const { id } = req.params;
        const producto = await _productoService.get(id);
        return res.send(producto);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const productos = await _productoService.getAll(pageSize, pageNum);
        return res.send(productos);
    }
    async create(req, res) {
        const { body } = req;
        const createdProducto = await _productoService.create(body);
        return res.send(createdProducto);
    }
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedProducto = await _productoService.update(id, body);
        return res.send(updatedProducto);
    }
    async delete(req, res) {
        const { id } = req.params;
        const deleteProduct = await _productoService.delete(id);
        return res.send(deleteProduct);
    }
    search(req, res) {}
}

module.exports = ProductoController;
