class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async getAll() {
        // const skips = pageSize * (pageNum - 1);
        console.log(`repository checked`);
        return await this.model.findAll();
    }
}

module.exports = BaseRepository;
