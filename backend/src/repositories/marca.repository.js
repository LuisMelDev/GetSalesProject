const BaseRepository = require("./base.repository");
let _marca = null;

class MarcaRepository extends BaseRepository {
    constructor({ Marca }) {
        super(Marca);
        _marca = Marca;
    }

    async getProductos(marcaId) {
        const marca = await _marca.findByPk(marcaId);
        return await marca.getProductos();
    }
}

module.exports = MarcaRepository;
