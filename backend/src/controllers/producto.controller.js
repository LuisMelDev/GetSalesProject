const Sequelize = require("sequelize");
const Op = Sequelize.Op;
let _productoService = null;

class ProductoController {
    constructor({ ProductoService }) {
        _productoService = ProductoService;
    }
    async get(req, res) {
        const { id } = req.params;
        const producto = await _productoService.get(id);
        return res.send(producto);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const productos = await _productoService.getAll(pageSize, pageNum);
        return res.send(productos);
    }
    async create(req, res) {
        const { body } = req;
        const createdProducto = await _productoService.create(body);
        return res.send(createdProducto);
    }
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedProducto = await _productoService.update(id, body);
        return res.send(updatedProducto);
    }
    async delete(req, res) {
        const { id } = req.params;
        const deleteProduct = await _productoService.delete(id);
        return res.send(deleteProduct);
    }

    async getProductoByNombre(req, res){
        const { nombre } = req.params;
        const producto = await _productoService.getProductoByNombre(nombre);
        return res.send(producto);
    }
    async search(req, res) {
        const { nombre, amperaje, grupo, marca } = req.query;
        const options = { where: {} };
        if (nombre) {
            options.where.nombre = {
                [Op.like]: `%${nombre}%`,
            };
        }
        if (amperaje) {
            options.where.amperaje_id = amperaje;
        }
        if (grupo) {
            options.where.grupo_id = grupo;
        }
        if (marca) {
            options.where.marca_id = marca;
        }
        const productos = await _productoService.searchAll(options);
        return res.send(productos);
    }
}

module.exports = ProductoController;
