const BaseRepository = require("./base.repository");
let _cliente = null;

class ClienteRepository extends BaseRepository {
    constructor({ Cliente }) {
        super(Cliente);
        _cliente = Cliente;
    }

    async getFacturas(clienteId) {
        const cliente = await _cliente.findByPk(clienteId);
        return await cliente.getFacturas();
    }
}

module.exports = ClienteRepository;
