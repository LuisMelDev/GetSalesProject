const Sequelize = require("sequelize");
const Op = Sequelize.Op;
let _rolService = null;
const { rolSchema } = require('../validations');


class RolController {
    constructor({ RolService }) {
        _rolService = RolService;
    }
    async get(req, res) {
        const { id } = req.params;
        const rol = await _rolService.get(id);
        return res.send(rol);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const roles = await _rolService.getAll(pageSize, pageNum);
        return res.send(roles);
    }
    async create(req, res) {
        const { body } = req;
        await rolSchema
            .validate(body)
            .catch((err) => ErrorHandler(401, err.errors[0]));
        const createdRol = await _rolService.create(body);
        return res.send(createdRol);
    }
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedRol = await _rolService.update(id, body);
        return res.send(updatedRol);
    }
    async delete(req, res) {
        const { id } = req.params;
        const deletedRol = await _rolService.delete(id);
        return res.send(deletedRol);
    }
    async getUsuarios(req, res) {
        const { rolId } = req.params;
        const usuariosRol = await _rolService.getUsuarios(rolId);
        return res.send(usuariosRol);
    }
    async search(req, res) {
        const { rol } = req.query;
        const options = { where: {} };
        if (rol) {
            options.where.rol = {
                [Op.like]: `%${rol}%`,
            };
        }
        const roles = await _rolService.searchAll(options);
        return res.send(roles);
    }
}

module.exports = RolController;
