const { Vacation } = require('../models/models')
const { VacationDate } = require('../models/models')
const ApiError = require('../error/ApiError')

class VacationController {

    async getAll(req, res) {
        const { id } = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        const vacationDate = await VacationDate.findAll({ where: { userId: id } })
        const vacation = await Vacation.findAll({ where: { userId: id } })
        res.json({ info: vacation, dates: vacationDate })
    }

    async add(req, res, next) {
        try {

            const { start, end, duration, userId } = req.body
            if (!userId) {
                return next(ApiError.badRequest('Не задан ID'))
            }
            const vacationDate = await VacationDate.create({ start, end, duration, userId })
            return res.json(vacationDate)

        } catch (e) {

            next(ApiError.badRequest(e.message))

        }

    }

}

module.exports = new VacationController()