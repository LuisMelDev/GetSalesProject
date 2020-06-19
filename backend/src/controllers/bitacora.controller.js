let _bitacoraService = null;
const { bitacoraSchema } = require('../validations');

class BitacoraController {
    constructor({ BitacoraService }) {
        _bitacoraService = BitacoraService;
    }
    async get(req, res) {
        const { id } = req.params;
        const bitacora = await _bitacoraService.get(id);
        return res.send(bitacora);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const bitacoras = await _bitacoraService.getAll(pageSize, pageNum);
        return res.send(bitacoras);
    }
    async create(req, res) {
        const { body } = req;
        await bitacoraSchema
            .validate(body)
            .catch((err) => ErrorHandler(401, err.errors[0]));
        const createdBitacora = await _bitacoraService.create(body);
        return res.send(createdBitacora);
    }
}

module.exports = BitacoraController;
