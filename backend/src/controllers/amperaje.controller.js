let _amperajeService = null;

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
    async getProductos(req, res) {}
    async search(req, res) {}
}

module.exports = AmperajeController;
