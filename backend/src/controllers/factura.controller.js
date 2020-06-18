let _facturaService = null;

class FacturaController {
    constructor({ FacturaService }) {
        _facturaService = FacturaService;
    }
    async get(req, res) {
        const { id } = req.params;
        const factura = await _facturaService.get(id);
        return res.send(factura);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const amperajes = await _facturaService.getAll(pageSize, pageNum);
        return res.status(200).json(amperajes);
    }

    async create(req, res) {
        const { detalles, ...factura } = req.body;
        const createdFactura = await _facturaService.create(factura);
        detalles.forEach(async ({ producto, cantidad, precio }) => {
            const detalle = {
                factura_id: createdFactura.id,
                producto_id: producto,
                cantidad_producto: cantidad,
                precio_producto: precio,
            };
            // TODO crear metodo createDetalle
            const detalle_factura = await _facturaService.createDetalle(
                detalle
            );
        });
        return res.send(createdFactura);
    }
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedFactura = await _facturaService.update(id, body);
        return res.send(updatedFactura);
    }
    async delete(req, res) {
        const { id } = req.params;
        const deletedFactura = await _facturaService.delete(id);
        return res.send(deletedFactura);
    }
    async getCliente(req, res) {
        const { id } = req.params;
        const factura = await _facturaService.get(id);
        const cliente = await factura.getCliente();
        return res.send(cliente);
    }
    async search(req, res) {
        const { cliente, usuario } = req.query;
        const options = { where: {} };
        if (cliente) {
            options.where.cliente_id = cliente;
        }
        if (usuario) {
            options.where.usuario_id = usuario;
        }
        const compras = await _facturaService.searchAll(options);
        return res.send(compras);
    }
}

module.exports = FacturaController;
