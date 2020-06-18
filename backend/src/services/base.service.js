const { ErrorHelper } = require("../helpers");
//clase de de servicio base para operaciones crud basicas
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }
<<<<<<< HEAD
    async get(id) {
        return await this.repository.get(id);
    }
=======

    async get(id){
        if(!id){
            ErrorHelper(400,"id must be sent")
        }

        const currentEntity = await this.repository.get(id)

        if(!currentEntity){
            ErrorHelper(404,"entitys does not found")
        }

        return currentEntity
    }

    async create(entity){
        return await this.repository.create(entity)
    }

>>>>>>> 531c195e68ebb72fc9e40339d4f98d8f0715a84f
    async getAll() {
        return await this.repository.getAll();
    }
<<<<<<< HEAD
    async searchAll(options) {
        return await this.repository.searchAll(options);
    }
=======

    async update(id, entity){
        if(!id || !entity){
            ErrorHelper(400,"id or entity must be sent")
        }
        
        return await this.repository.update(id,entity)
    }

    async delete(id){
        if(!id){
            ErrorHelper(400,"id must be sent")
        }
        
        return await this.repository.delete(id)
    }

>>>>>>> 531c195e68ebb72fc9e40339d4f98d8f0715a84f
}

module.exports = BaseService;
