const { Router } = require('express')
const router = Router()

router.get('/',)

router.post('/', async (req, res) => {
    try {
        console.log(req.body);

        res.json({ answer: 'Ваша заявка принята к рассмотрению' })

    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "Form error" })
    }
})

router.put('/',)

module.exports = router