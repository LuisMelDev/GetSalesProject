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
        const { body } = req;
        const createdFactura = await _facturaService.create(body);
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
    async getCliente(req, res) {}
    async search(req, res) {}
}

module.exports = FacturaController;
