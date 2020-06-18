const BaseRepository = require("./base.repository");
let _marca = null;

class MarcaRepository extends BaseRepository {
    constructor({ Marca }) {
        super(Marca);
        _marca = Marca;
    }

    async getProductosMarca() {
        return await _marca.getProductos();
    }
}

module.exports = MarcaRepository;
