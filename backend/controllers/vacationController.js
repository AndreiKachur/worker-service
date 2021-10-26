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
        const vacationDateFormat = vacationDate.map(item => {
            return (
                {
                    start: item.start,
                    end: item.end,
                    duration: item.duration,
                    status: item.status
                }
            )
        })

        res.json({
            region: vacation[0].region,
            restDaysAmount: vacation[0].restDaysAmount,
            dates: vacationDateFormat
        })
    }

    async add(req, res, next) {
        try {

            const { start, end, duration, status, userId } = req.body
            if (!userId) {
                return next(ApiError.badRequest('Не задан ID'))
            }
            const vacationDate = await VacationDate.create({
                start, end, duration, status, userId
            })

            return res.json(vacationDate)

        } catch (e) {

            next(ApiError.badRequest(e.message))

        }
    }

    // async update(req, res, next) {
    //     try {

    //         const { start, end, duration, status, id } = req.body
    //         if (!userId) {
    //             return next(ApiError.badRequest('Не задан ID'))
    //         }
    //         const vacationDate = await VacationDate.update({
    //             start, end, duration, status, userId
    //         })

    //         return res.json(vacationDate)

    //     } catch (e) {

    //         next(ApiError.badRequest(e.message))

    //     }

    // }

}

module.exports = new VacationController()