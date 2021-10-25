const { Router } = require('express')
const router = Router()

const vacationController = require('../controllers/vacationController')

router.get('/', vacationController.getVacation)

router.post('/', vacationController.addForm)

router.put('/cancel',)

module.exports = router