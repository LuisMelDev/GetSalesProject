let _amperajeService = null;

class AmperajeController {
    constructor({ AmperajeService }) {
        _amperajeService = AmperajeService;
    }
    async getAll(req, res) {
        const amperajes = await _amperajeService.getAll();
        return res.status(200).json(amperajes);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = AmperajeController;
