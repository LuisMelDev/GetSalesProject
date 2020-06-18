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
        const { detalles, ...compra } = req.body;
        const createdCompra = await _compraService.create(compra);
        detalles.forEach(async ({ producto, cantidad, precio }) => {
            const detalle = {
                compra_id: createdCompra.id,
                producto_id: producto,
                cantidad_producto: cantidad,
                precio_producto: precio,
            };
            // TODO crear metodo createDetalle
            const detalle_compra = await _compraService.createDetalle(detalle);
        });
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

    async getByFecha(req, res){
        const { fecha } = req.params;
        const compra = await _compraService.getByFecha(fecha);
        return res.send(compra);
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
