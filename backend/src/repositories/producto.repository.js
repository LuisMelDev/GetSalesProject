const BaseRepository = require("./base.repository");
let _producto = null;
let _marca = null;
let _grupo = null;
let _amperaje = null;

class ProductoRepository extends BaseRepository {
    constructor({ Producto, Marca, Grupo, _amperaje }) {
        super(Producto);
        _producto = Producto;
        _marca = Marca;
        _grupo = Grupo;
        _amperaje = Amperaje;
    }

    async getAll(limitResults, pageNum) {
        if (!limitResults || !pageNum) {
            return await _producto.findAll();
        }
        const page = parseInt(pageNum);
        const limit = parseInt(limitResults);
        const results = await _producto.findAll({
            limit,
            offset: (page - 1) * limit,
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
        });
        const count = await _producto.count();
        const paginationResults = this.getPaginate(limit, page, count);
        paginationResults.results = results;
        return paginationResults;
    }

    async getProductoByNombre(nombre) {
        return await _producto.findAll({
            where: {
                nombre,
            },
        });
    }
}

module.exports = ProductoRepository;
