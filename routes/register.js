const { Router } = require("express")

const routes = Router()

routes.get("/register", (req, res) => {
	const username = req.cookies.username

	if (username) {
		res.redirect("/")
	}

	res.sendFile(__dirname + "/templates/register.htm")
})

routes.post("/register", (req, res) => {
	const username = req.body.username
	res.cookie("username", username, {maxAge: 1000 * 60 * 60 * 3})
	res.redirect("/register")
})

module.exports = routes