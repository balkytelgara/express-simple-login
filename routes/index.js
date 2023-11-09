const { Router } = require("express")

const routes = Router()

routes.get("/", (req, res) => {
	const username = req.cookies.username

	if (!username) {
		res.redirect("/register")
	}
	res.sendFile(__dirname + "/templates/index.htm")
})

module.exports = routes