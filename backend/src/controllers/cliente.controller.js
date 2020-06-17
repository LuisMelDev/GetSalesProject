let _clienteService = null;

class ClienteController {
    constructor({ ClienteService }) {
        _clienteService = ClienteService;
    }
    async getAll(req, res) {
        const clientes = await _clienteService.getAll();
        return res.status(200).json(clientes);
    }
    async get() {}
    async create() {}
    async post() {}
    async update() {}
    async delete() {}
}

module.exports = ClienteController;
