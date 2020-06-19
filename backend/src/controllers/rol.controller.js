const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { rolSchema } = require("../validations");
const { ErrorHelper } = require("../helpers");

let _rolService = null;
let _bitacoraService = null;

class RolController {
    constructor({ RolService, BitacoraService }) {
        _rolService = RolService;
        _bitacoraService = BitacoraService;
    }
    async get(req, res, next) {
        const { id } = req.params;
        try {
            const rol = await _rolService.get(id);
            return res.send(rol);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async getAll(req, res, next) {
        const { pageSize, pageNum } = req.query;
        try {
            const roles = await _rolService.getAll(pageSize, pageNum);
            return res.send(roles);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async create(req, res, next) {
        const { body, user } = req;
        try {
            await rolSchema
                .validate(body)
                .catch((err) => ErrorHelper(401, err.errors[0]));
            const createdRol = await _rolService.create(body);
            await _bitacoraService.register(
                "CREATE",
                `ROLES(ID: ${createdRol.id})`,
                user.id
            );
            return res.send(createdRol);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async update(req, res, next) {
        const { body, user } = req;
        const { id } = req.params;
        try {
            await rolSchema
                .validate(body)
                .catch((err) => ErrorHelper(401, err.errors[0]));
            const updatedRol = await _rolService.update(id, body);
            await _bitacoraService.register(
                "UPDATE",
                `ROLES(ID: ${id})`,
                user.id
            );

            return res.send(updatedRol);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async delete(req, res, next) {
        const { id } = req.params;
        const { user } = req;
        try {
            const deletedRol = await _rolService.delete(id);
            await _bitacoraService.register(
                "DELETE",
                `ROLES(ID: ${id})`,
                user.id
            );
            return res.send(deletedRol);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async getUsuarios(req, res, next) {
        const { rolId } = req.params;
        try {
            const usuariosRol = await _rolService.getUsuarios(rolId);
            return res.send(usuariosRol);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
    async search(req, res, next) {
        const { rol } = req.query;
        const options = { where: {} };
        if (rol) {
            options.where.rol = {
                [Op.like]: `%${rol}%`,
            };
        }
        try {
            const roles = await _rolService.searchAll(options);
            return res.send(roles);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
}

module.exports = RolController;
