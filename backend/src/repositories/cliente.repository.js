const BaseRepository = require("./base.repository");
let _cliente = null;

class ClienteRepository extends BaseRepository {
    constructor({ Cliente }) {
        super(Cliente);
        _cliente = Cliente;
    }
}

module.exports = ClienteRepository;
