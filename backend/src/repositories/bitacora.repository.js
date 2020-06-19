let _bitacora = null;

class BitacoraRepository {
    constructor({ Bitacora }) {
        _bitacora = Bitacora;
    }
    async getByUsuario(userId) {
        return await _bitacora.findOne({
            where: {
                usuario_id: userId,
            },
        });
    }
    async getByOperacion(operacionId) {
        return await _bitacora.findOne({
            where: {
                operacion_id: operacionId,
            },
        });
    }
    async getAll(limit = 5, pageNum = 1) {
        const offset = limit * (pageNum - 1);
        return await _bitacora.findAll({
            offset,
            limit,
        });
    }
    async register(operacionId, descripcion, usuarioId) {
        return await _bitacora.create({
            operacion_id: operacionId,
            descripcion,
            usuario_id: usuarioId,
        });
    }
}

module.exports = BitacoraRepository;
