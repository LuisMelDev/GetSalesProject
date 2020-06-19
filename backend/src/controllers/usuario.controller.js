const Sequelize = require("sequelize");
const Op = Sequelize.Op;
let _usuarioService = null;
const { ErrorHelper } = require('../helpers');
const { usuarioSchema } = require('../validations');

class UsuarioController {
    constructor({ UsuarioService }) {
        _usuarioService = UsuarioService;
    }
    async get(req, res) {
        const { id } = req.params;
        const usuario = await _usuarioService.get(id);
        return res.send(usuario);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const usuarios = await _usuarioService.getAll(pageSize, pageNum);
        return res.send(usuarios);
    }

    async create(req, res) {
        const { body } = req;
        await usuarioSchema
            .validate(body)
            .catch((err) => ErrorHelper(401, err.errors[0]));
        const createdUsuario = await _usuarioService.create(body);
        return res.send(createdUsuario);
    }
    

    async update(req, res) {
        const { body } = req;
        const { id } = req.params;
        const updatedUsuario = await _usuarioService.update(id, body);
        return res.send(updatedUsuario);
    }
    async delete(req, res) {
        const { id } = req.params;
        const deletedUsuario = await _usuarioService.delete(id);
        return res.send(deletedUsuario);
    }

    async getUsuarioByUsername(req,res){
        const { username } = req.params;
        const usuario = await _usuarioService.getUsuarioByUsername(username);
        return res.send(usuario);
    }

    async getUsuarioByNombre(req,res){
        const { nombre } = req.params;
        const usuario = await _usuarioService.getUsuarioByNombre(nombre);
        return res.send(usuario);
    }

    async getFacturas(req,res){
        const { userId } = req.params;
        const usuarioFacturas = await _usuarioService.getFacturas(userId);
        return res.send(usuarioFacturas);
    }

    async getCompras(req,res){
        const { userId } = req.params;
        const usuarioCompras = await _usuarioService.getCompras(userId);
        return res.send(usuarioCompras);
    }

    async getOperaciones(req, res) {
        const { id } = req.params;
        const usuario_op = await _usuarioService.get(id);
        const operaciones = usuario.getOperaciones();
        return res.send(operaciones);
    }

    async search(req, res) {
        const { nombre, username, email } = req.query;
        const options = { where: {} };
        if (nombre) {
            options.where.nombre = {
                [Op.like]: `%${nombre}%`,
            };
        }
        if (username) {
            options.where.username = {
                [Op.like]: `%${username}%`,
            };
        }
        if (email) {
            options.where.email = {
                [Op.like]: `%${email}%`,
            };
        }
        const usuarios = await _usuarioService.searchAll(options);
        return res.send(usuarios);
    }
}

module.exports = UsuarioController;
