let _compraService = null;

class CompraController {
    constructor({ CompraService }) {
        _compraService = CompraService;
    }
    async get(req, res) {
        const { id } = req.params;
        const compra = await _compraService.get(id);
        return res.send(compra);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req;
        const compras = await _compraService.getAll(pageSize, pageNum);
        return res.send(compras);
    }
    async create(req, res) {
        const { body } = req;
        const createdCompra = await _compraService.create(body);
        return res.send(createdCompra);
    }
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedCompra = await _compraService.update(id, body);
        return res.send(updatedCompra);
    }
    async delete(req, res) {
        const { id } = req.params;
        const deletedCompra = await _compraService.delete(id);
        return res.send(deletedCompra);
    }
    async getProveedor(req, res) {
        const { id } = req.params;
        const compra = await _compraService.get(id);
        const proveedor = await compra.getProveedor();
        return res.send(proveedor);
    }
    async search(req, res) {
        const { proveedor, usuario } = req.query;
        const options = { where: {} };
        if (proveedor) {
            options.where.proveedor_id = proveedor;
        }
        if (usuario) {
            options.where.usuario_id = usuario;
        }
        const compras = await _compraService.searchAll(options);
        return res.send(compras);
    }
}

module.exports = CompraController;
