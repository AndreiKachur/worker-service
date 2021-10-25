const { Router } = require('express')
const router = Router()

const userController = require('../controllers/userController')

router.get('/', userController.getUser)

router.put('/', userController.change)

module.exports = router