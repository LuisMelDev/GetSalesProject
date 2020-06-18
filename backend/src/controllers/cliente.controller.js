const Sequelize = require("sequelize");
const Op = Sequelize.Op;
let _clienteService = null;

class ClienteController {
    constructor({ ClienteService }) {
        _clienteService = ClienteService;
    }
    async get(req, res) {
        const { id } = req.params;
        const cliente = await _clienteService.get(id);
        return res.send(cliente);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const clientes = await _clienteService.getAll(pageSize, pageNum);
        return res.send(clientes);
    }
    async create(req, res) {
        const { body } = req;
        const createdCliente = await _clienteService.create(body);
        return res.send(createdCliente);
    }
    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedCliente = await _clienteService.update(id, body);
        return res.send(updatedCliente);
    }
    async delete(req, res) {
        const { id } = req.params;
        const deletedCliente = await _clienteService.delete(id);
        return res.send(deletedCliente);
    }
    async getFacturas(req, res) {
        const { id } = req.params;
        const cliente = await _clienteService.get(id);
        const facturas = await cliente.getFacturas();
        return res.send(facturas);
    }
    async search(req, res) {
        const { cedula, nombre, email } = req.query;
        const options = { where: {} };
        if (cedula) {
            options.where.cedula = {
                [Op.like]: `%${cedula}%`,
            };
        }
        if (nombre) {
            options.where.nombre = {
                [Op.like]: `%${nombre}%`,
            };
        }
        if (email) {
            options.where.email = {
                [Op.like]: `%${email}%`,
            };
        }
        const clientes = await _clienteService.searchAll(options);
        return res.send(clientes);
    }
}

module.exports = ClienteController;
