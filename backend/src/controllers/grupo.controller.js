let _grupoService = null;

class GrupoController {
    constructor({ GrupoService }) {
        _grupoService = GrupoService;
    }
    async getAll(req, res) {
        const grupos = await _grupoService.getAll();
        return res.status(200).json(grupos);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = GrupoController;
