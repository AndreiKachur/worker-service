const { Vacation } = require('../models/models')
const { VacationDate } = require('../models/models')
const ApiError = require('../error/ApiError')

async function vacationFormat(id) {
    const vacationDate = await VacationDate.findAll({ where: { userId: id } })
    const vacation = await Vacation.findAll({ where: { userId: id } })
    const vacationDateFormat = vacationDate.map(item => {
        return (
            {
                id: item.id,
                start: item.start,
                end: item.end,
                duration: item.duration,
                status: item.status
            }
        )
    })

    return {
        region: vacation[0].region,
        restDaysAmount: vacation[0].restDaysAmount,
        dates: vacationDateFormat
    }
}

class VacationController {

    async getAll(req, res) {
        const { id } = req.query

        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        const data = await vacationFormat(id)
        res.json(data)
    }

    async add(req, res, next) {
        try {

            const { start, end, duration, status, userId } = req.body
            if (!userId) {
                return next(ApiError.badRequest('Не задан ID'))
            }
            await VacationDate.create({
                start, end, duration, status, userId
            })
            const vacation = await Vacation.findOne({ where: { userId: userId } })

            const { restDaysAmount } = vacation
            const newRestDaysAmount = restDaysAmount - duration
            console.log(newRestDaysAmount);

            await Vacation.update(
                { restDaysAmount: newRestDaysAmount },
                { where: { userId: userId } }
            )

            const data = await vacationFormat(userId)
            res.json(data)

        } catch (e) {

            next(ApiError.badRequest(e.message))

        }
    }

    async update(req, res, next) {
        try {

            const { id, userId } = req.body
            if (!id) {
                return next(ApiError.badRequest('Не задан ID'))
            }
            await VacationDate.update(
                { status: 'Отмена - на рассмотрении' },
                { where: { id: id } }
            )
            const data = await vacationFormat(userId)
            res.json(data)

        } catch (e) {

            next(ApiError.badRequest(e.message))

        }

    }

}

module.exports = new VacationController()