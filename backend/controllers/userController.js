const ApiError = require('../error/ApiError')

class UserController {

    async getUser(req, res, next) {
        const { id } = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }

    async change(req, res) {


    }
}

module.exports = new UserController()