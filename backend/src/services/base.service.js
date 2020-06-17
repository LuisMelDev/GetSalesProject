const { ErrorHelper } = require("../helpers");
//clase de de servicio base para operaciones crud basicas
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    async getAll() {
        // const offset = pageSize * (pageNum - 1)
        // const limit = pageSize
        console.log(`service checked`);
        return await this.repository.getAll();
    }
}

module.exports = BaseService;
