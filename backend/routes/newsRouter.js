const { Router } = require('express')
const router = Router()

const newsController = require('../controllers/newsController')

router.get('/', newsController.getAll)

router.post('/', newsController.create)


// router.put('/',)
// router.delete('/',)

module.exports = router