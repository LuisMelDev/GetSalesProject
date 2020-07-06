const BaseRepository = require("./base.repository");
let _cliente = null;

class ClienteRepository extends BaseRepository {
    constructor({ Cliente }) {
        super(Cliente);
        _cliente = Cliente;
    }

    async getAll(limitResults, pageNum) {
        if (!limitResults || !pageNum) {
            return await _cliente.findAll();
        }
        const page = parseInt(pageNum);
        const limit = parseInt(limitResults);
        const results = await _cliente.findAll({
            limit,
            offset: (page - 1) * limit,
        });
        const count = await _cliente.count();
        const paginationResults = this.getPaginate(limit, page, count);
        paginationResults.results = results;
        return paginationResults;
    }
    async getFacturas(clienteId) {
        const cliente = await _cliente.findByPk(clienteId);
        return await cliente.getFacturas();
    }
}

module.exports = ClienteRepository;
