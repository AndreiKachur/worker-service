const { WorkDay } = require('../models/models')
const ApiError = require('../error/ApiError')

async function workDaysFormat(id) {

    const workdays = await WorkDay.findAll({ where: { userId: id } })

    return workdays.reduce((acc, item) => {
        acc[item.date] = [{
            date: item.date,
            hours: item.hours,
            name: item.name,
        }]
        return acc
    }, {})

}

class WorkDaysController {

    async getWorkdays(req, res) {
        const { id } = req.query

        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        const data = await workDaysFormat(id)
        res.json(data)
        // res.status(200).json({ message: 'Test is done on workdays.' })
    }

    async addForm(req, res, next) {
        try {
            const { date, hours, name, userId } = req.body

            if (!userId || !name || !date) {
                return next(ApiError.badRequest('Не задан обязательный аргумент'))
            }

            await WorkDay.create({
                date, hours, name, userId
            })
            const data = await workDaysFormat(userId)

            res.json(data)

        } catch (e) {

            next(ApiError.badRequest(e.message))

        }
    }

}

module.exports = new WorkDaysController()