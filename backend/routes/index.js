const Router = require('express')
const router = Router()

const userRouter = require('./userRouter')
const newsRouter = require('./newsRouter')
const vacationRouter = require('./vacationRouter')
const workdaysRouter = require('./workdaysRouter')

router.use('/user', userRouter)
router.use('/news', newsRouter)
router.use('/vacation_', vacationRouter)
router.use('/workdays_', workdaysRouter)

module.exports = router