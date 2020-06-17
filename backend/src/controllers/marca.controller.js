let _marcaService = null;

class MarcaController {
    constructor({ MarcaService }) {
        _marcaService = MarcaService;
    }
    async get(req, res) {
        const { id } = req.params;
        const marca = await _marcaService.get(id);
        return res.send(marca);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const marcas = await _marcaService.getAll(pageSize, pageNum);
        return res.send(marcas);
    }
    async create(req, res) {
        const { body } = req;
        const createdMarca = await _marcaService.create(body);
        return res.send(createdMarca);
    }
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedMarca = await _marcaService.update(id, body);
        return res.send(updatedMarca);
    }
    async delete(req, res) {
        const { id } = req.params;
        const deletedMarca = await _marcaService.delete(id);
        return res.send(deletedMarca);
    }
    async getProductos(req, res) {}
    async search(req, res) {}
}

module.exports = MarcaController;
