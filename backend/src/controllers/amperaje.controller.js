let _amperajeService = null;
const { amperajeSchema } = require('../validations');


class AmperajeController {
    constructor({ AmperajeService }) {
        _amperajeService = AmperajeService;
    }
    async get(req, res) {
        const { id } = req.params;
        const amperaje = await _amperajeService.get(id);
        return res.send(amperaje);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const amperajes = await _amperajeService.getAll(pageSize, pageNum);
        return res.send(amperajes);
    }
    async create(req, res) {
        const { body } = req;
        await amperajeSchema
            .validate(body)
            .catch((err) => ErrorHandler(401, err.errors[0]));
        const createdAmperaje = await _amperajeService.create(body);
        return res.send(createdAmperaje);
    }
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedAmperaje = await _amperajeService.update(id, body);
        return res.send(updatedAmperaje);
    }
    async delete(req, res) {
        const { id } = req.param;
        const deletedAmperaje = await _amperajeService.delete(id);
        res.send(deletedAmperaje);
    }
    async getProductos(req, res) {
        const { id } = req.params;
        const amperaje = await _amperajeService.get(id);
        const productos = await amperaje.getProductos();
        return res.send(productos);
    }
    async search(req, res) {
        const { amp } = req.query;
        const options = { where: {} };
        if (amp) {
            options.where.amp = amp;
        }
        const amperajes = await _amperajeService.searchAll(options);
        return res.send(amperajes);
    }
}

module.exports = AmperajeController;
