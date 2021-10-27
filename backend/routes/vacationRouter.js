const { Router } = require('express')
const router = Router()

const vacationController = require('../controllers/vacationController')

router.get('/', vacationController.getAll)

router.post('/', vacationController.add)

router.put('/', vacationController.update)

module.exports = router