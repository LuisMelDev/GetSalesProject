let _marcaService = null;

class MarcaController {
    constructor({ MarcaService }) {
        _marcaService = MarcaService;
    }
    async getAll(req, res) {
        const marcas = await _marcaService.getAll();
        return res.status(200).json(marcas);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = MarcaController;
