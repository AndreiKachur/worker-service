class UserController {

    async getUser(req, res) {
        const { id } = req.query
        res.json(id)
    }

    async change(req, res) {


    }
}

module.exports = new UserController()