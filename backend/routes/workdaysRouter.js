const { Router } = require('express')
const router = Router()

const workdaysController = require('../controllers/workdaysController')

router.get('/', workdaysController.getWorkdays)

router.post('/', workdaysController.addForm)

router.put('/',)

module.exports = router