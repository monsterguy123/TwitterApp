import hashtags from '../models/hashtags.js'

class hashtagRepository {

    async create(data) {
        try {
            const tag = await hashtags.create(data);
            return tag;
        } catch (error) {
            // console.log(error);
            throw error;
        }
    }

    async bulkCreate(data) {
        try {
            const tag = await hashtags.insertMany(data)
            return tag;
        } catch (error) {
            console.log(tag)
        }
    }

    async getAll(offset, limit) {
        try {
            const tag = await hashtags.find().skip(offset).limit(limit);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async find(id) {
        try {
            const tag = await hashtags.findById(id)
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(name) {
        try {
            const tag = await hashtags.find({ title: name })
            return tag;
        } catch (error) {
            console.log(error)
        }
    }

    async destory(id) {
        try {
            const response = await hashtags.findByIdAndRemove(id)
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}

export default hashtagRepository;