const BaseRepository = require("./base.repository");
let _inventario = null;
let _producto = null;
let _marca = null;
let _grupo = null;
let _amperaje = null;

class InventarioRepository extends BaseRepository {
    constructor({ Inventario, Producto, Marca, Grupo, Amperaje }) {
        super(Inventario);
        _inventario = Inventario;
        _producto = Producto;
        _marca = Marca;
        _grupo = Grupo;
        _amperaje = Amperaje;
    }

    async getAll(limitResults, pageNum) {
        const includeParams = [
            {
                model: _producto,
                as: "producto",
                include: [
                    {
                        model: _marca,
                        as: "marca",
                    },
                    {
                        model: _grupo,
                        as: "grupo",
                    },
                    {
                        model: _amperaje,
                        as: "amperaje",
                    },
                ],
            },
        ];
        if (!limitResults || !pageNum) {
            return await _inventario.findAll({ include: includeParams });
        }
        const page = parseInt(pageNum);
        const limit = parseInt(limitResults);
        const results = await _inventario.findAll({
            limit,
            offset: (page - 1) * limit,
            include: includeParams,
        });
        const count = await _inventario.count();
        const paginationResults = this.getPaginate(limit, page, count);
        paginationResults.results = results;
        return paginationResults;
    }

    async getByFecha(fecha_entrada) {
        return await _inventario.findAll({
            where: {
                fecha_entrada,
            },
        });
    }
}
module.exports = InventarioRepository;
