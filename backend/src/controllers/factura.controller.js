const { facturaSchema } = require("../validations");
const { ErrorHelper } = require("../helpers");

let _facturaService = null;
let _bitacoraService = null;

class FacturaController {
    constructor({ FacturaService, BitacoraService }) {
        _facturaService = FacturaService;
        _bitacoraService = BitacoraService;
    }
    async get(req, res, next) {
        const { id } = req.params;
        try {
            const factura = await _facturaService.get(id);
            return res.send(factura);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async getAll(req, res, next) {
        const { pageSize, pageNum } = req.query;
        try {
            const facturas = await _facturaService.getAll(pageSize, pageNum);
            return res.send(facturas);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async create(req, res, next) {
        const { user } = req;
        const { detalles, ...factura } = req.body;
        try {
            await facturaSchema
                .validate(factura)
                .catch((err) => ErrorHelper(401, err.errors[0]));
            const createdFactura = await _facturaService.create(factura);
            const detallesData = detalles.map((detalle) => {
                return {
                    ...detalle,
                    factura_id: createdFactura.id,
                };
            });
            await _facturaService.createDetalles(detallesData);
            await _bitacoraService.register(
                "CREATE",
                `FACTURAS(ID: ${createdFactura.id})`,
                user.id
            );
            return res.send(createdFactura);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async update(req, res, next) {
        const { body, user } = req;
        const { id } = req.params;
        try {
            await facturaSchema
                .validate(body)
                .catch((err) => ErrorHelper(401, err.errors[0]));
            const updatedFactura = await _facturaService.update(id, body);
            await _bitacoraService.register(
                "UPDATE",
                `FACTURAS(ID: ${id})`,
                user.id
            );
            return res.send(updatedFactura);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async delete(req, res, next) {
        const { id } = req.params;
        const { user } = req;
        try {
            const deletedFactura = await _facturaService.delete(id);
            await _bitacoraService.register(
                "DELETE",
                `FACTURAS(ID: ${id})`,
                user.id
            );
            return res.send(deletedFactura);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async getByFecha(req, res, next) {
        const { fecha } = req.params;
        try {
            const factura = await _facturaService.getByFecha(fecha);
            return res.send(factura);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async getCliente(req, res, next) {
        const { id } = req.params;
        try {
            const factura = await _facturaService.get(id);
            const cliente = await factura.getCliente();
            return res.send(cliente);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async search(req, res, next) {
        const { cliente, usuario } = req.query;
        const options = { where: {} };
        if (cliente) {
            options.where.cliente_id = cliente;
        }
        if (usuario) {
            options.where.usuario_id = usuario;
        }
        try {
            const compras = await _facturaService.searchAll(options);
            return res.send(compras);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
}

module.exports = FacturaController;
