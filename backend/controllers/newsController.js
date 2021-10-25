class newsController {

    async getNews(req, res) {
        res.status(200).json({ message: 'Test is done on News.' })
    }

}

module.exports = new newsController()