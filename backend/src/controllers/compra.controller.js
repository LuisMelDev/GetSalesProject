let _compraService = null;
const { compraSchema } = require("../validations");
const { ErrorHelper } = require("../helpers");

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
        try {
            await compraSchema
                .validate(compra)
                .catch((err) => ErrorHandler(401, err.errors[0]));
            const createdCompra = await _compraService.create(compra);
            const detallesData = detalles.map((detalle) => {
                return {
                    ...detalle,
                    compra_id: createdCompra.id,
                };
            });
            console.log(detallesData);
            await _compraService.createDetalles(detallesData);
            console.log(`almost end`);
            return res.send(createdCompra);
        } catch (err) {
            console.error(err);
        }
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

    async getByFecha(req, res) {
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
