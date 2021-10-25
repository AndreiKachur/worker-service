const ApiError = require('../error/ApiError')
const { User } = require('../models/models')

class UserController {

    async getUser(req, res, next) {
        const { id } = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        const user = await User.findOne({ id: id })
        res.json(user)
    }

    async create(req, res) {
        const { id, mail, password, role, userName, fullName, avatar, telephoneNumber } = req.body
        const user = await User.create({ id, mail, password, role, userName, fullName, avatar, telephoneNumber })
        return res.json(user)
    }

    async change(req, res) {


    }
}

module.exports = new UserController()