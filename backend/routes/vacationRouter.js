const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Test is done on vacation.' })
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body);

        res.json({ answer: 'Ваша заявка принята к рассмотрению' })

    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "Form error" })
    }
})

router.put('/cancel',)

module.exports = router