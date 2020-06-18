class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return await this.model.findByPk(id);
    }

    async getAll(pageSize = 5, pageNum = 1) {
        const skips = pageSize * (pageNum - 1);
        return await this.model.find().skip(skips).limit(pageSize);
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
