const { News } = require('../models/models');
const ApiError = require('../error/ApiError');

class newsController {

    async getAll(req, res) {
        res.status(200).json({ message: 'Test is done on News.' })
    }
    async create(req, res) {
        const { privateNews, title, content, createAt, image } = req.body
        const news = await News.create({ privateNews, title, content, createAt, image })
        return res.json(news)
    }

}

module.exports = new newsController()