let _grupoService = null;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { grupoSchema } = require("../validations");

class GrupoController {
    constructor({ GrupoService }) {
        _grupoService = GrupoService;
    }
    async get(req, res) {
        const { id } = req.params;
        const grupo = await _grupoService.get(id);
        return res.send(grupo);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const grupos = await _grupoService.getAll(pageSize, pageNum);
        return res.send(grupos);
    }
    async create(req, res) {
        const { body } = req;
        await grupoSchema
            .validate(body)
            .catch((err) => ErrorHandler(401, err.errors[0]));
        const createdGrupo = await _grupoService.create(body);
        return res.send(createdGrupo);
    }
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedGrupo = await _grupoService.update(id, body);
        return res.send(updatedGrupo);
    }
    async delete(req, res) {
        const { id } = req.params;
        const deletedGrupo = await _grupoService.delete(id);
        return res.send(deletedGrupo);
    }

    async getProductos(req, res) {
        const { grupoId } = req.params;
        const productos = await _grupoService.getProductos(grupoId);
        return res.send(productos);
    }

    async search(req, res) {
        const { nombre } = req.query;
        const options = { where: {} };
        if (nombre) {
            options.where.nombre = {
                [Op.like]: `%${nombre}%`,
            };
        }
        const grupos = await _grupoService.searchAll(options);
        return res.send(grupos);
    }
}

module.exports = GrupoController;
