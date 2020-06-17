const BaseRepository = require("./base.repository");
let _marca = null;

class MarcaRepository extends BaseRepository {
    constructor({ Marca }) {
        super(Marca);
        _marca = Marca;
    }
}

module.exports = MarcaRepository;
