const { Router } = require('express')
const router = Router()

router.post('/', async (req: any, res: any) => {
    try {
        console.log(req.body);

        res.json({ answer: 'Ваша заявка принята к рассмотрению' })

    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "Form error" })
    }
})

module.exports = router