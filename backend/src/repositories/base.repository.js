class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    
    async get(id) {
        return await this.model.findByPk(id)
    }


    async create(entity) {
        return await this.model.create(entity)
    }

    async update(id, entity) {
        return this.model.update(entity, {
            where: {
                id: id
            }
        })
    }

    async delete(id) {
       await this.model.destroy({
            where: {
                id
            }
        })

        return true
    }
    
    async getAll() {
        // const skips = pageSize * (pageNum - 1);
        console.log(`repository checked`);
        return await this.model.findAll();
    }
}

module.exports = BaseRepository;
