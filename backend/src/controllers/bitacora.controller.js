let _bitacoraService = null;

class BitacoraController {
    constructor({ BitacoraService }) {
        _bitacoraService = BitacoraService;
    }
    async getAll(req, res) {
        const bitacoras = await _bitacoraService.getAll();
        return res.status(200).json(bitacoras);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = BitacoraController;
