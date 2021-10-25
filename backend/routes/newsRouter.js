const { Router } = require('express')
const router = Router()

const newsController = require('../controllers/newsController')

router.get('/', newsController.getNews)


// router.put('/',)
// router.delete('/',)

module.exports = router