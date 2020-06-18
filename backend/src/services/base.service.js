const { ErrorHelper } = require("../helpers");
//clase de de servicio base para operaciones crud basicas
class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

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

    async getAll() {
        // const offset = pageSize * (pageNum - 1)
        // const limit = pageSize
        console.log(`service checked`);
        return await this.repository.getAll();
    }

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

}

module.exports = BaseService;
