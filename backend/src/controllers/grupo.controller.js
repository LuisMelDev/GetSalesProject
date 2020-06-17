let _grupoService = null;

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
    async getProductos(req, res) {}
    async search(req, res) {}
}

module.exports = GrupoController;
