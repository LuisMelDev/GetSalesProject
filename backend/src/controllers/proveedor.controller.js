const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { proveedorSchema } = require("../validations");
const { ErrorHelper } = require("../helpers");

let _proveedorService = null;
let _bitacoraService = null;

class ProveedorController {
    constructor({ ProveedorService, BitacoraService }) {
        _proveedorService = ProveedorService;
        _bitacoraService = BitacoraService;
    }
    async get(req, res, next) {
        const { id } = req.params;
        try {
            const proveedor = await _proveedorService.get(id);
            return res.send(proveedor);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async getAll(req, res, next) {
        const { pageSize, pageNum } = req.query;
        try {
            const proveedores = await _proveedorService.getAll(
                pageSize,
                pageNum
            );
            return res.send(proveedores);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async create(req, res, next) {
        const { body, user } = req;
        try {
            await proveedorSchema
                .validate(body)
                .catch((err) => ErrorHelper(401, err.errors[0]));
            const createdProveedor = await _proveedorService.create(body);
            await _bitacoraService.register(
                "CREATE",
                `PROVEEDORES(ID: ${createdProveedor.id})`,
                user.id
            );
            return res.send(createdProveedor);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async update(req, res, next) {
        const { body, user } = req;
        const { id } = req.params;
        try {
            await proveedorSchema
                .validate(body)
                .catch((err) => ErrorHelper(401, err.errors[0]));
            const updatedProveedor = await _proveedorService.update(id, body);
            await _bitacoraService.register(
                "UPDATE",
                `PROVEEDORES(ID: ${id})`,
                user.id
            );
            return res.send(updatedProveedor);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async delete(req, res, next) {
        const { id } = req.params;
        const { user } = req;
        try {
            const deletedProveedor = await _proveedorService.delete(id);
            await _bitacoraService.register(
                "DELETE",
                `PROVEEDORES(ID: ${id})`,
                user.id
            );
            return res.send(deletedProveedor);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async getProveedorByNombre(req, res, next) {
        const { nombre } = req.params;
        try {
            const proveedor = await _proveedorService.getProveedorByNombre(
                nombre
            );
            return res.send(proveedor);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async getCompras(req, res, next) {
        const { proveedorId } = req.params;
        try {
            const compras = await _proveedorService.getCompras(proveedorId);
            return res.send(compras);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async search(req, res, next) {
        const { nombre } = req.query;
        const options = { where: {} };
        if (nombre) {
            options.where.nombre = {
                [Op.like]: `%${nombre}%`,
            };
        }
        try {
            const proveedores = await _proveedorService.searchAll(options);
            return res.send(proveedores);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
}

module.exports = ProveedorController;
