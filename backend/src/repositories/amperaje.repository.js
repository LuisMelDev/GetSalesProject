const BaseRepository = require("./base.repository");
let _amperaje = null;

class AmperajeRepository extends BaseRepository {
    constructor({ Amperaje }) {
        super(Amperaje);
        _amperaje = Amperaje;
    }
    async getProductos(amperajeId) {
        const amperaje = await _amperaje.findByPk(amperajeId);
        return await amperaje.getProductos();
    }
}

module.exports = AmperajeRepository;
