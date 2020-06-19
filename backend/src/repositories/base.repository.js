class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return await this.model.findByPk(id);
    }

    async getAll(limit = 10, pageNum = 1) {
        const offset = limit * (pageNum - 1);
        return await this.model.findAll({
            offset,
            limit,
        });
    }

    async create(entity) {
        return await this.model.create(entity);
    }

    async update(id, entity) {
        return this.model.update(entity, {
            where: {
                id: id,
            },
        });
    }

    async delete(id) {
        await this.model.destroy({
            where: {
                id,
            },
        });

        return true;
    }
    async searchAll(options) {
        return await this.model.findAll(options);
    }
}

module.exports = BaseRepository;
