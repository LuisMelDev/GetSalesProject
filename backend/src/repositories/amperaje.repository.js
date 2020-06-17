const BaseRepository = require("./base.repository");
let _amperaje = null;

class AmperajeRepository extends BaseRepository {
    constructor({ Amperaje }) {
        super(Amperaje);
        _amperaje = Amperaje;
    }
}

module.exports = AmperajeRepository;
