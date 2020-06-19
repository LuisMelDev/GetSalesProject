let _operacionService = null;
const { operacionSchema } = require('../validations');

class OperacionController {
    constructor({ OperacionService }) {
        _operacionService = OperacionService;
    }
    async get(req, res) {
        const { id } = req.params;
        const operacion = await _operacionService.get(id);
        return res.send(operacion);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const operaciones = await _operacionService.getAll(pageSize, pageNum);
        return res.send(operaciones);
    }
    async create(req, res) {
        const { body } = req;
        await operacionSchema
            .validate(body)
            .catch((err) => ErrorHandler(401, err.errors[0]));
        const createdOperacion = await _operacionService.create(body);
        return res.send(createdOperacion);
    }
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedOperacion = await _operacionService.update(id, body);
        return res.send(updatedOperacion);
    }
    async delete(req, res) {
        const { id } = req.params;
        const deletedOperacion = await _operacionService.delete(id);
        return res.send(deletedOperacion);
    }
    async getUsuarios(req, res) {
        const { id } = req.params;
        const operacion = await _operacionService.get(id);
        const usuarios = await operacion.getUsuarios();
        return res.send(usuarios);
    }
}

module.exports = OperacionController;
