class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async get(id) {
        return await this.model.findByPk(id);
    }
    async getAll() {
        // const skips = pageSize * (pageNum - 1);
        return await this.model.findAll();
    }
    async searchAll(options) {
        return await this.model.findAll(options);
    }
}

module.exports = BaseRepository;
