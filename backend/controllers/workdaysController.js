class WorkDaysController {

    async getWorkdays(req, res) {
        res.status(200).json({ message: 'Test is done on workdays.' })
    }

    async addForm(req, res) {
        try {
            console.log(req.body);

            res.json({ answer: 'Ваша заявка принята к рассмотрению' })

        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Form error" })
        }
    }

}

module.exports = new WorkDaysController()