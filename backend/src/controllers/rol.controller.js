let _rolService = null;

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
    async getUsuarios(req, res) {}
}

module.exports = RolController;
