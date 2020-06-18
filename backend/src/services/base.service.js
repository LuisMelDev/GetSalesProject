const { ErrorHelper } = require("../helpers");
//clase de de servicio base para operaciones crud basicas
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }
    async get(id) {
        return await this.repository.get(id);
    }
    async getAll() {
        return await this.repository.getAll();
    }
    async searchAll(options) {
        return await this.repository.searchAll(options);
    }
}

module.exports = BaseService;
